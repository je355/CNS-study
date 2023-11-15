// import Header from "./Header";
import Dummy from "../asset/dummyData.json"
import Box from "../components/common/Box"

// function App() {
//   return (
//     <>
//     {/* <Header/> */}
//     {/* <Header></Header> */}
//       <div></div>
//       <p>안녕하세요</p>
//     </>
//   );
// }

// export default App;

import React, { useEffect, useState } from 'react'
import ServerUrl from "../config/config.json"
import axios from "axios"

const App = () => {
  const [data, setData] = useState([]);
  //배열 [ ] 이 잇으면 웹이 실행되고 실행, 배열이 없으면 계속 실행
  //왜냐하면 배열에는 변수가 들어가는디 
  //배열이 없으면 바뀔 애가 없어서 계속 사용됨
  useEffect(()=>{
    axios.get(`${ServerUrl.ServerUrl}/post/view`)
    .then((e)=> console.log(e))
    .catch((e)=> console.log(e))
  }, []);

  return (
    <>
      <div className="Box"></div>
      {Dummy.data.map((value, index)=>(
        <Box title={value.title} date={value.date} index={index}/>
      ))}
      {/* 변수를 불러올땐 중괄호 */}
    </>
  )
}

export default App
