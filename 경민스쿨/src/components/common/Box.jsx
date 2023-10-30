//common은 사이드바, 헤더 같은것들 자주 쓰는게 있는 거 / page는 그냥 page 그 자체 

import React from 'react'
import { useNavigate } from 'react-router-dom'

const Box = ({ title, date, index }) => {
  const Navigate = useNavigate();
  return (
    <div style={{
      display:"inline-block",
      width:"200px", 
      height:"50px", 
      border:"2px solid #777", 
      borderRadius:"10px",
      padding:"10px",
      margin:"16px"
    }}
    onClick={()=>Navigate(`/detail/${index}`)}
  >
        <p> {title} </p>
        <p> {date} </p>
    </div>
  )
}

export default Box