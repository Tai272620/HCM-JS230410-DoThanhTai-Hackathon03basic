import Header from "./components/header/Header";
import ListNotes from "./components/listNotes/ListNotes";
import { useState } from "react";

function App() {
  const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem("notes")) || []);
  const handleAddNote = (newNote) => {
    const notesUpdate = [...notes, newNote];
    setNotes(notesUpdate);
    localStorage.setItem("notes", JSON.stringify(notesUpdate));
  }

  const handleDeleteNote = (id) => {
    const notesUpdate = notes.filter((item) => {
      return item.id !== id;
    })
    setNotes(notesUpdate);
    localStorage.setItem("notes", JSON.stringify(notesUpdate));
  }
  return (
    <div>
      <Header />
      <ListNotes handleAddNote={handleAddNote} notes={notes} handleDeleteNote={handleDeleteNote} />
    </div>
  );
}

export default App;
