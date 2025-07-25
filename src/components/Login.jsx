import { useRef } from "react"
import { isLogin } from "../atoms/IsLoginAtom";
import { useAtom } from "jotai";

export default function Login() {
  const [login, setLogin] = useAtom(isLogin) ;

  const emailRef = useRef() ;
  const pwdRef = useRef() ;

  const handleLogin = (e) => {
    e.preventDefault() ;

    if (emailRef.current.value == "") {
      alert("이메일을 입력하세요.") ;
      emailRef.current.focus();
      return ;
    }
    if (pwdRef.current.value == "") {
      alert("비밀번호를 입력하세요.") ;
      pwdRef.current.focus();
      return ;
    }

    if ( emailRef.current.value != "pnumin@pusan.ac.kr") {
      alert("아이디가 존재하지 않습니다.") ;
      return ;
    }

    if ( pwdRef.current.value != "pnumin1234") {
      alert("비밀번호가 일치하지 않습니다.") ;
      return ;
    }

    localStorage.setItem("id", emailRef.current.value) ;
    setLogin(true) ;
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
            <div className="mt-2">
              <input id="email" 
                      ref={emailRef}
                      type="email" 
                      name="email" 
                      // required 
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
            </div>
            <div className="mt-2">
              <input id="password" 
                      ref= {pwdRef}
                      type="password" 
                      name="password" 
                      // required 
                      className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
            </div>
          </div>

          <div>
            <button onClick={handleLogin}
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  )
}
