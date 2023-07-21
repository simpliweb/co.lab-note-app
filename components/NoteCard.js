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
     if(note.note ){
const addNote = [...notesArray,note]
setNotesArray(addNote)
console.log(notesArray);
     }
    },[note])
    function deleteNoteHandler(id) {
        console.log(notesArray);
        const updatedList = notesArray.filter((i) => i.id != id);
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
        {notesArray.length > 0 && notesArray.map((note) => (
            <div>
       
       
        <div className={classes.Note} key={note.id}>
        <span className={classes.note_Text}>{note.note}</span>
            <div className='footer'>
                <AiFillDelete className={classes.delete_icon} size='1.3em'onClick={()=> deleteNoteHandler(note.id)} />
                {/* <AiFillEdit className='edit-icon' size='1.3em' onClick={() => editTask(note)} /> */}
                <AiFillEdit className={classes.edit_icon} size='1.3em'/> 
                <small>{date}</small>                
            </div>
        </div>
        {/* {isEditing && <h2>yo</h2>} */}
        </div>
         ))}
        </div>
    );
}
export default NoteCard;