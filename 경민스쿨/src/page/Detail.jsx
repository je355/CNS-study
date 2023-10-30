import React from 'react'
import Dummy from "../asset/dummyData.json"
import "../style/detail.css"
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); 
  // 비구조할당
  return (
    <div className='mainContainer'>
      <div className='titleWrap'>
        <p className='title'>{Dummy.data[id].title}</p>
        <p className='date'>{Dummy.data[id].date}</p>
      </div>
      <p className='context'>{Dummy.data[id].context}</p>
    </div>
  )
}

export default Detail