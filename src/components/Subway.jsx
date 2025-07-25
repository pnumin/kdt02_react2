import TailSelect from "../ui/TailSelect"
import sarea from "../db/sarea.json"
import SubwayBox from "./SubwayBox";

import { useRef, useState, useEffect } from "react"
export default function Subway() {
  const [tdata, setTdata] = useState([]) ;
  const [timeData, setTimeData] = useState([]) ;

  const selRef = useRef() ;
  const sareaCode = sarea.map(item => item["코드"]) ;
  const sareaArea = sarea.map(item => item["측정소"]) ;
  const today = new Date().toISOString().slice(0, 10).replaceAll("-","") ;
  // const today = '20250724'

  const getFetchData = async () => {
    const baseUrl = "https://apis.data.go.kr/6260000/IndoorAirQuality/getIndoorAirQualityByStation?" ;
    const apiKey = import.meta.env.VITE_API;
    let url = `${baseUrl}serviceKey=${apiKey}&pageNo=1&numOfRows=24&resultType=json` ;
    url = `${url}&controlnumber=${today}&areaIndex=${selRef.current.value}`;

    console.log(url)
    const resp = await fetch(url);
    const data = await resp.json();

    setTdata(data.response.body.items.item) ;
  }

  const handleSelect = () => {
    console.log(selRef.current.value)
    getFetchData();
  }


  useEffect(() => {
    let tm = [] ;
    tm = tdata.map(item => item.controlnumber) ;
    tm.sort() ;
    console.log("시간정렬", tm)
   
    
    let tmData = [] ;
    tmData = tm.map(item => tdata.filter(titem => titem.controlnumber == item)[0])

    setTimeData(tmData)
  } , [tdata]) ;

  return (
    <div className="w-full flex flex-col">
      <div className="w-9/10 grid grid-cols-1 md:grid-cols-2 gap-4">
        <h1 className="flex justify-center items-center text-2xl font-bold">
          측정소 선택
        </h1> 
        <TailSelect selRef = {selRef}
                    handleSel = {handleSelect}
                    dText = "--- 측정소 선택 ---"
                    opv = {sareaCode}
                    opt = {sareaArea} /> 
      </div>
      <div>
          {
            timeData.map((item, idx) => <SubwayBox key={item.controlnumber} 
                                            idx= {idx}
                                            item={item} />
            )
          }
      </div>
    </div>
  )
}
