import React from 'react'

import * as S from "../style/NotFound.style"
import { useNavigate } from 'react-router-dom';

import damgom from "../asset/damgom.jpeg"

const NotFound = () => {
    const Navigate = useNavigate();
  return (
    
    <div>
        <S.ErrorText> <S.Error404>404</S.Error404> : NotFound </S.ErrorText>   
        <S.NotFoundText> 검색하신 페이지가 없습니다! </S.NotFoundText> 
        <S.BackButton1>
            <S.BackButton onClick={() => Navigate("/")}> 홈으로 돌아가기 </S.BackButton>
        </S.BackButton1>
        <S.SadImage1>
            <S.SadImage src={ damgom }></S.SadImage>
        </S.SadImage1> 
    </div>
  )
}

export default NotFound