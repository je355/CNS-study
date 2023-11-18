import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './page/App'
import Login from './page/Login'
import Myinfo from './page/Myinfo'
import Header from './components/header/Header'
import Detail from './page/Detail'
import NotFound from './page/NotFound'
import Create from './page/Create'

const router = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/*" element={<NotFound/>}></Route>
            <Route path="/" element={<App />}/>
            <Route path="/login" element={<Login />}/>
            {/* 소문자로 login 적으면 태그로 인식해서, 컴퍼넌트로 만들기 위해 대문자 */}
            <Route path="/myinfo" element={<Myinfo />}/>
            <Route path="/detail/:id" element={<Detail />}/>

            <Route path="/create" element={<Create />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default router