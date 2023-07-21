import NoteCard from './NoteCard';
import classes from  "./Main.module.css";
import Input from './Input';
function Main({ notes }) {
    return (
        <div className={classes.main_note_package}>
       
        <div className='notes-list'>
        <Input/>              
        </div>
        </div>
    );
}
export default Main;