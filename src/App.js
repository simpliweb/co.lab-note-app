import { React, useState, useEffect } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import "./components/Main.js";
import Main from "./components/Main.js";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: 'First note',
      date: '20/07/2023',
    },
    {
      id: nanoid(),
      text: 'Second note',
      date: '20/07/2023',
    },
    {
      id: nanoid(),
      text: 'Third note',
      date: '20/07/2023',
    },
    {
      id: nanoid(),
      text: 'Fourth note',
      date: '20/07/2023',
    },
  ]);

  //retrieve notes data in local storage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-data'));
    //checking if it's saved
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  //save notes data in local storage
  useEffect(() => {
    localStorage.setItem('react-notes-data', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className='container'>
      <Main notes={notes} />
    </div>
  );
}

export default App;
