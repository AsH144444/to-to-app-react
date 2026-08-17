import { useState } from "react";

export function Input({ data, setData, inputRef }) {
  const [value, setValue] = useState("");

  const Change = (event) => {
    setValue(event.target.value);
  };

  function SaveNote() {
    if (value === "") {
      alert("your have to Enter to save");
      return;
    }

    const newValue = [...data, value];

    setData(newValue);
    setValue("");
  }
  function handleKeyDown(event) {
    if (event.key === "Enter") {
      SaveNote();
    }
  }
  return (
    <div>
      <div className="navbar">
        <div className="hcon">
          <h1 id="to">To Do App</h1>
        </div>
        <div className="nav-right">
          <input
            value={value}
            onChange={Change}
            id="ninput"
            type="text"
            ref={inputRef}
            onKeyDown={handleKeyDown}
          />
          <button id="savebtn" onClick={SaveNote}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
