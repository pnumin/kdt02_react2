import reactLogo from '../assets/react.svg'
import { Link, useNavigate } from 'react-router-dom'
import { useAtom } from 'jotai'
import { isLogin } from '../atoms/IsLoginAtom'

export default function Nav() {
  const [login, seLogin] = useAtom(isLogin) ;
  const navigator = useNavigate() ;
  const handleLogout = () => {
    seLogin(false) ;
    localStorage.removeItem("id") ;
    navigator("/");
  }
  
  return (
    <header className="w-full min-h-20 
                         bg-green-50
                         flex justify-between items-center">
        <div className="flex ml-10">
          <img src={reactLogo} alt="react" /> + 
          <img src="/vite.svg" alt="vite" />
        </div>
        <div className='text-2xl font-bold text-green-800'>
          <ul className='flex justify-center items-center'>
          <Link to="/" >
            <li className='p-4 rounded-lg hover:bg-green-800 hover:text-white'>
              홈으로
            </li>
          </Link>
          { login && <Link to="/subway">
            <li className='p-4 rounded-lg hover:bg-green-800  hover:text-white'>
              지하철 대기정보
            </li>
          </Link> }
          { login && <Link to="/todo">
            <li className='p-4 rounded-lg hover:bg-green-800  hover:text-white'>
              할일목록
            </li>
          </Link> }
          </ul>
        </div>
        <div className='mr-10 text-xl font-bold p-3 text-green-900
                        border border-green-700 rounded-xl'>
          { login ? 
            <span   className='cursor-pointer'
                    onClick={handleLogout}>로그아웃</span> 
            : "로그인" }
        </div>
      </header>
  )
}
