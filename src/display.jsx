import { useState } from "react";

import { Displaydone } from "./displayDone";
export function Display({ data, setData }) {
  const [dones, setDones] = useState(
    JSON.parse(localStorage.getItem("done")) || [],
  );

  function deletes(inde) {
    setData(data.filter((_, index) => inde !== index));
  }
  function done(inde) {
    const saveDones = [...dones, data[inde]];

    setDones(saveDones);
    localStorage.setItem("done", JSON.stringify(saveDones));
    setData(data.filter((_, index) => inde !== index));
  }
  return (
    <>
      <div className="for-h">
        {" "}
        <h1 id="h">Yours To-Do's</h1>
      </div>
      <div id="display">
        {data.map((element, index) => {
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
