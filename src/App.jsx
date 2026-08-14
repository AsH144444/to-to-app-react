import { useState , useEffect } from 'react';
import { Input } from './input'
import { Display } from './display'
import './App.css'

function App() {
    const [data, setData] = useState(
    JSON.parse(localStorage.getItem("note")) || [],
  );
  useEffect(() => {
    localStorage.setItem("note", JSON.stringify(data));
    
    
  }, [data]);
  

  return (
    <>
      <Input data ={data} setData ={setData} />
      <Display data={data}/>
    </>
  )
}

export default App
