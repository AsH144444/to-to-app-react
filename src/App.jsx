import { useState , useEffect, useRef } from 'react';
import { Input } from './input'
import { Display } from './display'

import './App.css'

function App() {
    const [data, setData] = useState(
    JSON.parse(localStorage.getItem("note")) || [],
  );
  const inputRef =useRef(null)
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(data));
    
    
  }, [data]);
  

  return (
    <>
      <Input data ={data} setData ={setData} inputRef={inputRef} />
      <Display data={data} setData={setData} inputRef={inputRef} />

    </>
  )
}

export default App
