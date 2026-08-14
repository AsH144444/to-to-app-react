

export function Display({data}){

      return(
        <>

        <div className="for-h"> <h1 id="h">Yours To-Do's</h1></div>
      <div id="display">
                          { data.map((element, index) => {
    return(          <div className="d-box" key={index}>
              <p className="p-show">{element}</p>
              <button className="done">Done</button>
              <button className="delete">Delete</button>
              
          </div>)

  })
}
       

    </div>

        </>

      )
}