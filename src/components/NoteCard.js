import { useEffect, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';  
import classes from './NoteCard.module.css'
function NoteCard({ id, text, date, note }) {
    const [notesArray, setNotesArray] = useState([])
    const [edit,setEdit] = useState({
        id:null,
        note:'',
    })
    const [isEditing,setIsEditing] = useState(false)
    useEffect(() => {
   
const addNote = [...notesArray,note]
setNotesArray(addNote)


    },[note])
    function deleteNoteHandler(note) {

        const updatedList = notesArray.filter((i) => i !== note);
        setNotesArray(updatedList);
      }
        


    // function editTask(note) {
    //     setIsEditing(true)
    //     setNotesArray(notesArray.map((note => note.id === note ? {
    //         ...note, isEditing: !note.isEditing
    //     } : note)))
    // }
    return (
        <div className={classes.Notes_grid}>
        {notesArray.map((note) => (
            <div>
       
       
        <div className={classes.Note} key={note.id}>
        <span className={classes.note_Text}>{note.note}</span>
            <div>
                <AiFillDelete className={classes.delete_icon} onClick={()=> deleteNoteHandler(note)} />
                {/* <AiFillEdit className='edit-icon' size='1.3em' onClick={() => editTask(note)} /> */}
                <AiFillEdit className={classes.edit_icon}/> 
                <small>{date}</small>                
            </div>
        </div>

        </div>
         ))}
        </div>
    );
}
export default NoteCard;