import React, { Dispatch, SetStateAction, useState } from 'react'
import ts from 'typescript'
import Input from './Input';

interface IUserInfo{
  id:string;
  password:string;
  name:string;
  //스트링은 무조건 소문자로!
  setState: Dispatch<SetStateAction<string>>
  //무슨 형태로 보내느닞 말하기 위해서
}
//오브젝트 전용

const App = () => {
  const [value, setValue] = useState<string>("");

  const login = ({id, password, name}:IUserInfo) => {
    alert("id : "+id+" / password : "+password+" / name : "+name);
  };

  // const GetToday = ():string => {
  //   return '오늘은 11월 20일';
  // }

  return (
    <>
      <Input 
      fontSize='1rem'
      placeholder='id를 입력해주세요'
      state={value}
      setState={setValue}
      />
      <Input 
      fontSize='2rem'
      placeholder='password를 입력해주세요'
      state={value}
      setState={setValue}
      />
      <Input 
      fontSize='3rem'
      placeholder='name를 입력해주세요'
      state={value}
      setState={setValue}
      />
      {/* state가 하나면 값을 다 똑같이 받게 됨 */}
      <button onClick={()=>alert(value)}>check</button>
    </>
  )
}

export default App

/**
타입 스크립트 기초

js
let abc = "adad";
ts
let abc:[타입]

-> number / let abc: number = 123;;
-> string / let abc: string = 'dddd';

js
function(){}
ts
():[type]=>{
  return [type value];
}

-> number / let abc: number[] = [112332] 넘버형 배열
-> string / let abc: string = 'dddd';

js
let abc = {
  od: "",
  password:''
}
let abc:{ddd}

*/