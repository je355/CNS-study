import React from 'react'
import { useNavigate } from 'react-router-dom';
import cnsLogo from "../../asset/cnslogo.svg"

const Logo = () => {
    const Navigate = useNavigate();
  return (
    <div
        onClick={()=>{
            Navigate("/");
        }}
        style={{ marginRight: "3rem" }}
        // css 가 아니라서 -를 빼기로 인식
    >
        <img src={cnsLogo} alt='error' style={{width:"50px"}}></img>
    </div>
  )
}

export default Logo