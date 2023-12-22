import React, { useState } from 'react'


const board = () => {
    const [state, useState] = useState(0);
    const {value, setValue} = useState("");

    const Boardname = (i) =>{
        console.log(i)
        setState()
    }
    
    const BoardContext = (e) => {
        console.log(value);
        setValue(e.target.value);
    }

  return (
    <>
        <input
            type='text'
            value={Boardname}
        />
        <input
            type='text'
            value = {BoardContext}
        />
    </>
  )
}

export default board

/* useState로 board이름, 간단 내용 넣는 input 만들기(총 두개)
useState가 이름, 내용 총 두개인데 한번에 합칠 수 있는 방법을 알려줘*/
