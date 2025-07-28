import TailButton from "../ui/TailButton"
import { useRef, useEffect } from "react"
export default function TodoForm({addTodo}) {
  const txtRef = useRef() ;
  const selRef = useRef() ;

  const handleOK = (e) => {
    e.preventDefault() ;

    if ( txtRef.current.value == "") {
      alert("할일 내용을 입력하세요.");
      txtRef.current.focus() ;
      return ;
    }

    addTodo(txtRef.current.value, selRef.current.value) ;
    handleCancel();
  }

  const handleCancel = () => {
     txtRef.current.value = "" ;
     txtRef.current.focus() ;
     selRef.current.value = "X" ;
  }

  useEffect(() => {
    txtRef.current.focus() ;
  } , []);
  return (
    <div className="w-full bg-amber-100 p-4">
      <div className="w-full p-5 flex justify-center items-center text-2xl font-bold">
        Todo List
      </div>
      <form className="w-full grid grid-cols-5 gap-4">
        <select id="sel1"
          ref={selRef}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" >
          <option value="X">X</option>
          <option value="O">O</option>
        </select>
        <input type="text" id="txt1"
          ref={txtRef}
          className="col-span-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
        <TailButton caption="확인"
          color="blue"
          onHandle={handleOK} />
        <TailButton caption="취소"
          color="orange"
          onHandle={handleCancel} />
      </form>
    </div>
  )
}
