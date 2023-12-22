import { useState} from "react"

function App() {
  // let a= 0;
  const [state, setState] = useState(0);
  const [value, setValue] = useState("");

  const a = (i) => {
    console.log(i)
    setState("hi")
  };

  const onChangeHandler = (e) =>{
    console.log(value);
    setValue(e.target.value);
  };

  return (
    <>
      <p> {state} </p>
      {/* <button onClick={()=>setState("hi")}>String</button> */}
      <button onClick={a}>String</button>
      <input 
      type="text" 
      vaule={value}
      // onChange={(e) => setValue(e.target.value)}
      onChange={onChangeHandler}
      />
    </>
  );
}

export default App;
