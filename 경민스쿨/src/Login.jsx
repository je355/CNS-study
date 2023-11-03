import React, { useState } from "react"
import "./Login.css"

const Login = () => {
  const [idvalue, setIdvalue] = useState("");
  const [passwordvalue, setPasswordvalue] = useState("");

  const OnclickHandler = () => {
    if(window.confirm("로그인하시겠습니까?")){
      console.log(idvalue, passwordvalue)
      // alert는 알림이라서 확인밖에 없음. window 확인 취소 시 사용
    }
  };

  return (
    <div className="MainLayout">
      <p className="LoginTitle"> 로그인 </p>
      <div className="InputWrap">
        <p> 아이디 </p>
        <input type='text'
        placeholder="아이디 입력해주세요" 
        value={idvalue} 
        className="Input"
        onChange={(e)=> setIdvalue(e.target.value)} ></input> 
        {/* 원래 안바뀌는 값이니까.. 바뀌게 */}
        {/* 원래 파리미터 금지지만 e를 모두 가르킨 ㄴ값이라서 ㄱㄴ */}
      </div>
      <div className="InputWrap">
        <p> 비밀번호 </p>
        <input type='password' 
        placeholder="비밀번호 입력해주세요"
        value={passwordvalue} 
        className="Input"
        onChange={(e)=> setPasswordvalue(e.target.value)} ></input> 
      </div>
      <button onClick={OnclickHandler} className="LoginButton"> 로그인 </button>
      <p> 계정이 없으십니까? </p>
    </div>
  )
}

export default Login