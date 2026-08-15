import { useState, } from "react";


export function Input({data, setData}) {
  const [value, setValue] = useState("");

  const Change = (event) => {
    setValue(event.target.value);
    
    
  };

  function SaveNote() {
    const newValue =[...data, value]
    
    setData(newValue);
    setValue("")
  }
  return (
    <div>
      <div className="navbar">
        <div className="hcon">
          <h1 id="to">To Do App</h1>
        </div>
        <div className="nav-right">
          <input value={value} onChange={Change} id="ninput" type="text" />
          <button id="savebtn" onClick={SaveNote}>
            Save
          </button>
        </div>
      </div>
          
    </div>

  );
}
