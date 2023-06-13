import React, { useState } from 'react';
import Note from '../note/Note';
import "./listNote.css";

const ListNotes = ({ handleAddNote, notes, handleDeleteNote }) => {
    function uuidv4() {
        return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    }
    const [note, setNote] = useState("");
    return (
        <div className='content-container'>
            <div>
                <textarea placeholder='Take a note' className='text-area' value={note} onChange={(e) => setNote(e.target.value)} />
                <button onClick={() => {
                    if (note !== "") {
                        handleAddNote({ id: uuidv4(), note: note }); setNote("")
                    } else {
                        alert("Please enter note!")
                    }
                }} className="add-button"><span className="material-symbols-outlined add">
                        add
                    </span></button></div>
            <div className='listNotes-container'>
                {notes.map((item, index) => (
                    <Note item={item} index={index} handleDeleteNote={handleDeleteNote} />
                ))}
            </div>

        </div>
    );
};

export default ListNotes;