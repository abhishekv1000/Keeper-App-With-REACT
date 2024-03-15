import React,{useState} from "react"
import Header from "./heading"
import Footer from "./footer";
import Notes from "./notes";
import content from "../contents";
import Creator from "./CreateNote"


function App(){
      
    const [notes ,setNotes] = useState([])

    function toadd(newnote) {
       setNotes(prevValue=>{
        return [...prevValue ,newnote]
       })
    }

    function deletenote(id) {
         setNotes(prevValue =>{
            return prevValue.filter((noteitem,index) =>{
               return index !=id
            })
         })
    }


    return <div>
          <Header/>
          <Creator onadd={toadd} />
          {notes.map((noteitem, index)=>{ 
             return <Notes onDelete={deletenote} id={index} key={index} title={noteitem.title} content={noteitem.content}/>
          })}
         
          <Footer/>
          
    </div>
}

export default App;