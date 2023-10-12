import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className='Container MainHeader'>
        <div className='Container'>
            <div className='Logo'>Logo</div>
            <div className='Container Context'>
                <p>홈</p>
                <p>원서접수</p>
                <p>공지사항</p>
            </div>
        </div>
        <div className='Container Button'>
            <button>로그인</button>
            <button>회원가입</button>
        </div>
    </div>
  );
};

export default Header
//rafce 선언 시 생성ㅇ