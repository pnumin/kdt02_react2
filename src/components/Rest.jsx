import { useState, useEffect, useRef } from "react"
import TailButton from "../ui/TailButton";
import axios from "axios";

const baseurl = "http://localhost:3005/posts" ;
export default function Rest() {
  const [ tdata , setTata ] = useState([]) ;
  const titleR = useRef() ;
  const authorR = useRef() ;

  const getFechData = async () => {
    

    // const resp = await fetch(baseurl) ;
    // const data = await resp.json() ;
    const { data } = await axios.get(baseurl) ;

    setTata(data) ;
  }

  const handleInput = async (e) => {
    e.preventDefault();
    let postData = {
      "title": titleR.current.value,
      "author": authorR.current.value  
    }

    const { data } = await axios.post(baseurl, postData) ;
    setTata([...tdata, data]) ;
  }

  const handleDelete = async(id) => {
    console.log(id)
    await axios.delete(`${baseurl}/${id}`) ;
    getFechData();
  }

  useEffect(() => {
    getFechData();
  } , []) ;
  return (
    <div  className="w-9/10 h-full flex flex-col justify-center items-center">
      <form className="mb-10">
        <label htmlFor="txt1">제목</label>
        <input type="text" 
                id="txt1"
                ref={titleR}
                className="border border-amber-300"/>
        <label htmlFor="txt2">이름</label>
        <input type="text" 
                id="txt2" 
                ref={authorR}
                className="border border-amber-300"/>
        <TailButton caption ="입력"
                    color="blue" 
                    onHandle = {handleInput} />
      </form>
      <ul>
        {tdata.map(item => <li key={item.id} className="text-2xl font-bold">
                            {item.title} ({item.author})
                            <TailButton caption ="삭제"
                                        color="orange" 
                                        onHandle = {() => handleDelete(item.id)} />
                          </li>)
        }
      </ul>
    </div>
  )
}
