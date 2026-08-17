export function Displaydone({ dones, setDones }) {
  const newDone =dones.toReversed();
  function del() {
    const de = [];
    localStorage.setItem("done", JSON.stringify(de));
    setDones(de);
  }
  return (
    <>
      {dones.length > 0 && (
        <div id="display-done">
          <div className="done-nav">
            <h1 className="done-h2">Done-Tasks</h1>
            <button className="done-btn" onClick={del}>
              Delete All
            </button>
          </div>
          {newDone.map((elment, index) => {
            return (
              <p key={index} className="p-done">
                {elment}
              </p>
            );
          })}
        </div>
      )}
    </>
  );
}
