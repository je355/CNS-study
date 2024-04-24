import React from 'react'
import * as S from "../style/NotFound.style"
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const Navigate = useNavigate();
  return (
    
    <div>
        <S.ErrorText> 404:NotFound </S.ErrorText>   
        <S.NotFoundText> 검색하신 페이지가 없습니다! </S.NotFoundText> 
        <S.BackButton1>
            <S.BackButton onClick={() => Navigate("/")}> 홈으로 돌아가기 </S.BackButton>
        </S.BackButton1>
    </div>
  )
}

export default NotFound