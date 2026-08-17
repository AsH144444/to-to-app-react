import { useState,} from "react";

import { Displaydone } from "./displayDone";
export function Display({ data, setData, inputRef }) {
  const [dones, setDones] = useState(
    JSON.parse(localStorage.getItem("done")) || [],
  );

  const newData = data.toReversed();
  function deletes(inde) {
    setData(newData.filter((_, index) => inde !== index));
  }
  function done(inde) {
    const saveDones = [...dones, newData[inde]];

    setDones(saveDones);
    localStorage.setItem("done", JSON.stringify(saveDones));
    setData(newData.filter((_, index) => inde !== index));
  }
  function Focus() {
    inputRef.current.focus();
  }

  return (
    <>
      {data.length === 0 && (
        <div className="dav">
          <button className="focus" onClick={Focus} >
            Create
          </button>
        </div>
      )}
      {data.length > 0 && (
        <div className="for-h">
          <h1 id="h">Yours To-Do's</h1>
        </div>
      )}
      <div id="display">
        {newData.map((element, index) => {
          return (
            <div className="d-box" key={index}>
              <p className="p-show">{element}</p>
              <button className="done" onClick={() => done(index)}>
                Done
              </button>
              <button className="delete" onClick={() => deletes(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>

      <Displaydone dones={dones} setDones={setDones} />
    </>
  );
}
