import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import Login from './Login'
import Myinfo from './Myinfo'
import Header from './Header'

const router = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/login" element={<Login />}/>
            {/* 소문자로 login 적으면 태그로 인식해서, 컴퍼넌트로 만들기 위해 대문자 */}
            <Route path="/myinfo" element={<Myinfo />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default router