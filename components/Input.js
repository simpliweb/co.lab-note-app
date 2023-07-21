import React, { useState } from "react";
import classes from './Input.module.css';
import NoteCard from "./NoteCard";
function Input() {
    const [note,setNote] = useState('')
    const [noteArray,PushNoteArray] = useState({})
    function SubmitNoteHandler(e) {
        e.preventDefault()

         let notesObj = {
        note:note,   
        id:Math.floor(Math.random() * 10000)
      }
      PushNoteArray(notesObj)
                console.log(noteArray);

console.log(note);
setNote('')
    }
    console.log(noteArray);
  function InputChangeHandler(e)  {
setNote(e.target.value)
  }
    return (
        <div>
        <form onSubmit={SubmitNoteHandler}>
        <input
        value={note}
            type="text"
        
            className={classes.Placeholder}
            placeholder= 'search'
            onChange={InputChangeHandler}
      
          />
          </form>
 <NoteCard note={noteArray}/>
 </div>
    )
}

export default Input