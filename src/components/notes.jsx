import React from "react";


function Notes(props){

  function HandleDelete() {
    props.onDelete(props.id);
  }

  return <div className="note">
       <h1>{props.title}</h1>
       <p>{props.content}</p>
       <button onClick={HandleDelete} type="button" class="btn btn-outline-danger">Delete</button>
  </div>   
}

export default Notes;