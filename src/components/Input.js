import React, { useState } from "react";
import classes from './Input.module.css';
import NoteCard from "./NoteCard";    
import {AiFillPlusSquare} from 'react-icons/ai'
function Input() {
    const [note,setNote] = useState('')
    const [noteArray,PushNoteArray] = useState({})
    const [showInput,setShowInput]  = useState(false)
function showInputHandler() {
  setShowInput(true)
}
function cancelHandler() {
  setShowInput(false)
}
    function SubmitNoteHandler(e) {
        e.preventDefault()
if(note.length > 0) {
  const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

      let notesObj = {
        note:note,   
        id:Math.floor(Math.random() * 10000),
        date:`${month}-${day}-${year}`,
        isEditing:false
      }
      PushNoteArray(notesObj)
      
setNote('')
setShowInput(false)
    }

    }
  
  function InputChangeHandler(e)  {
setNote(e.target.value)
  }
    return (
        <div>
          {!showInput && <AiFillPlusSquare className={classes.show_input} onClick={showInputHandler}/>}
      {showInput &&  <form onSubmit={SubmitNoteHandler}>
        <input
        value={note}
            type="text"
           className={classes.Placeholder}
            placeholder= 'Add note'
            onChange={InputChangeHandler}
      
          />
          </form>}
          {showInput &&<button className={classes.cancel} onClick={cancelHandler}>Cancel</button>}
 <NoteCard note={noteArray}/>
 </div>
    )
}

export default Input