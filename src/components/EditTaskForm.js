import { useState } from "react"

function EditTask(props) {
    const noteBeingEdited = props.editNote
    const note = props.note
    const [value,setValue] = useState(noteBeingEdited.note)
    const [completeEdit,setCompleteEdit] = useState(false)
    const [showForm,setShowForm] = useState(true)
    function editSubmitHandler(e) {
       
e.preventDefault()
note(value)
setShowForm(false)
setCompleteEdit(true)
    }
   return (
    <div>
  {showForm &&<form onSubmit={editSubmitHandler}>
   <input style={{backgroundColor:"green"}}
    value={value} onChange={(e) => setValue(e.target.value)}/>
    </form>}
{completeEdit && <h2>{value}</h2>}
</div>
   )
}

export default EditTask