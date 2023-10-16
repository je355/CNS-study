import React from 'react'
import "./Header.css";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const Navigate = useNavigate();
  return (
    <div className='Container MainHeader'>
        <div className='Container'>
            <div className='Logo' onClick={()=>{Navigate("/");
          }}>Logo</div>
            <div className='Container Context'>
                <p onClick={()=>{Navigate("/");
          }}>홈</p>
          <p>디테일</p>
                {/* <p>원서접수</p>
                <p>공지사항</p> */}
            </div>
        </div>
        <div className='Container Button'>
            <button onClick={()=>{Navigate("/login");
          }}>로그인</button>
            {/* <button>회원가입</button> */}
        </div>
    </div>
  );
};

export default Header
//rafce 선언 시 생성ㅇ