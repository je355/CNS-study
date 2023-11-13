import axios from 'axios';
import React, { useState } from 'react';
import ServerUrl from "../config/config.json"
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("");
    const [context, setContext] = useState("");
    const navigate = useNavigate();

    const ButtonHandler = () => {
        if(title !== "" && context !== ""){

            axios.post(`${ServerUrl.ServerUrl}/post/add`, 
            {title: title, context: context
            })
            .then((e)=> {
                alert(e.data);
                navigate("/");
            })
            .catch((e)=> console.log(e));
        } else{
            alert("값을 정확하게 입력해주세요.")
        }
    };

  return (
    <>
        <input type='text' 
        placeholder='제목'
         value={title} 
         onChange={(e)=>{
            setTitle(e.target.value)
            }}/>

        <textarea value={context}
        onChange={(e)=>{
           setContext(e.target.value)
           }}/>


        <button
        onClick={ButtonHandler}> 만들기 </button>
    </>
  )
}

export default Create