import React from 'react';
import "./note.css";

const Note = ({ item, index, handleDeleteNote }) => {
    return (
        <div key={index} className="note-container">
            <p>{item.note}</p>
            <button className='delete-button'><span className="material-symbols-outlined" onClick={() => handleDeleteNote(item.id)}>
                delete
            </span></button>
        </div>
    );
};

export default Note;