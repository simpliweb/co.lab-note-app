import { React, useState } from "react";
import { nanoid } from "nanoid";
import "./App.css";
import "./components/Main.js";
import Main from "./components/Main.js";
function App() {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "First note",
      date: "20/07/2023",
    },
    {
      id: nanoid(),
      text: "Second note",
      date: "20/07/2023",
    },
    {
      id: nanoid(),
      text: "Third note",
      date: "20/07/2023",
    },
    {
      id: nanoid(),
      text: "Fourth note",
      date: "20/07/2023",
    },
  ]);
  return (
    <div className="container">
      <Main notes={notes}/>
    </div>
  );
}

export default App;
