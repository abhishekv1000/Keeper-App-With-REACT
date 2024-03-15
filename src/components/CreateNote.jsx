import React from "react"

function Creator(props) {

    const [note , setNote ] = React.useState({
        title : "",
        content :""
    })

    function HandleChange(event) {
        const {name,value} = event.target
        
        setNote(prevValue =>{
            return {
                ...prevValue,
                [name] :value  
            }
        })
    }


    function onsubmit(e) {
       props.onadd(note)
        e.preventDefault()
    }

    return (
        <div>
          <form>
            <input  onChange={HandleChange} value={note.title} name="title" placeholder="Title" />
            <textarea onChange={HandleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
            <button onClick={onsubmit}>Add</button>
          </form>
        </div>
      );
    }

export default Creator