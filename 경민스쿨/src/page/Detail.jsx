import React from 'react'
import Dummy from "../asset/dummyData.json"
import { useNavigate, useParams } from 'react-router-dom';

import * as S from "../style/Detail.style"

const Detail = () => {
  const { id } = useParams(); 
  const Navigate = useNavigate();
  // 비구조할당
  return (
    <S.MainContanier>
      <S.TitleWrap>
        <S.Title>{Dummy.data[id].title}</S.Title>
        <S.Date>{Dummy.data[id].date}</S.Date>
      </S.TitleWrap>
      <S.Context>{Dummy.data[id].context}</S.Context>
      <S.BackButton onClick={() => Navigate("/")}> 뒤로가기 </S.BackButton>
      {/* /의미는 홈. router */}
    </S.MainContanier>
  )
}

export default Detail