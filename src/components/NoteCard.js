import { useEffect, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';  
import classes from './NoteCard.module.css'
import {FaFileSignature} from 'react-icons/fa'
function NoteCard({ id, text, date, note }) {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    const [notesArray, setNotesArray] = useState(savedNotes)
    const [editNote,setEditNote] = useState()
    const [isEditing,setIsEditing] = useState(false)
    const [taskEditing, setTaskEditing] = useState(null);
    const [editingText, setEditingText] = useState("");
    const [storageNotes,setStorageNotes] = useState([])
    const [edit,setEdit] = useState({
        id:null,
        note:'',
    })
    useEffect(() => {
        localStorage.setItem('react-notes-data', JSON.stringify(notesArray));
      }, [notesArray]);
    
     
        //checking if it's saved
  

 
      //save notes data in local stora

    useEffect(() => {
        console.log(note);
       if(note.note) {
const addNote = [...notesArray,note]
setNotesArray(addNote)
       }
    },[note])
 
    function deleteNoteHandler(note) {

        const updatedList = notesArray.filter((i) => i !== note);
        setNotesArray(updatedList);
      }
        


      function submitEdits(id) {
        const updatedNotes = [...notesArray].map((notes) => {
          if (notes.id === id && editingText.length > 0) {
          notes.note = editingText;
          }
          return notes;
        });
        setNotesArray(updatedNotes);
        setTaskEditing(null);
      }
    return (
        <div className={classes.Notes_grid}>
            
        {notesArray.map((note) => (
            <div>
         
       
        <div className={classes.Note} key={note.id}>
        <span className={classes.note_Text}>
        {/* <span>{note.isEditing &&
         <EditTask editNote={note.note} note={editTask}/>}</span> */}

{note.id === taskEditing ? (

                    <input 
                    defaultValue={note.note}
                    
                    className={classes.edit_input}
                    type='text'
                    onChange={(e) => setEditingText(e.target.value)}/>
                ):(
                <h2 className={classes.note_Text}>{note.note}</h2>)}</span>
            <div>
              
                {note.id === taskEditing ? (
                    <div>
                   <button className={classes.submit_edit_icon} onClick={() => submitEdits(note.id)}><FaFileSignature/>Submit Edits</button>
                   <AiFillDelete className={classes.delete_icon_task_edit} onClick={()=> deleteNoteHandler(note)} />
                   <h2 className={classes.note_date_task_edit}>{note.date}</h2> 
                   </div>
                   ):(
                    <div>
                    <AiFillEdit className={classes.edit_icon} onClick={() => setTaskEditing(note.id)} />
                    <AiFillDelete className={classes.delete_icon} onClick={()=> deleteNoteHandler(note)} />
                    <h2 className={classes.note_date}>{note.date}</h2>  
                </div> 
                )}
       
             
            </div>
        </div>

        </div>
         ))}
        </div>
    );
}
export default NoteCard;