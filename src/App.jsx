import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Login from './components/Login'
import Subway from './components/Subway'
import Rest from './components/Rest'
function App() {
 
  return (
    <BrowserRouter>
    <div className="w-full xl:w-8/10 h-screen mx-auto
                    flex flex-col justify-start items-start
                   ">
      <Nav />
      <main className="w-full flex-grow
                       overflow-y-auto py-10
                       flex flex-col justify-start items-center">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/subway" element={<Subway />} />
        <Route path="/rest" element={<Rest />} />
      </Routes>                  
      </main>
      <footer className="w-full min-h-20
                        bg-black text-white
                         flex justify-center items-center">
        K-digital 2025 2기 FrontEnd
      </footer>
    </div> 
    </BrowserRouter>
  )
}

export default App
