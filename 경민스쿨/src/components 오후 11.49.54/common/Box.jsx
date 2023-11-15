//common은 사이드바, 헤더 같은것들 자주 쓰는게 있는 거 / page는 그냥 page 그 자체 

import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from "../../style/ContentsBox.style"
// import {Title, BoxContainer} from "../../style/ContentsBox.style"

const Box = ({ title, date, index }) => {
  const Navigate = useNavigate();
  return (
    <S.BoxContainer onClick={() => Navigate (`/detail/${index}`)}>
        <S.Title> {title} </S.Title>
        <p> {date} </p>
    </S.BoxContainer>
  )
}

export default Box