export function Displaydone({ dones, setDones }) {
    function del(){
        setDones([""])
        
    }
  return (
    <>
      <div id="display-done">
        <div className="done-nav">
          <h1 className="done-h2">Done-Tasks</h1>
          <button className="done-btn"onClick={del}>Delete All</button>
        </div>
        {dones.map((elment, index) => {
          return (
            <p key={index} className="p-done">
              {elment}
            </p>
          );
        })}
      </div>
    </>
  );
}
