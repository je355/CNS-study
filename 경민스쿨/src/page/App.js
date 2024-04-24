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

import React from 'react'

const App = () => {
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
