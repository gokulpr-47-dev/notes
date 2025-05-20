import React from "react";
import "./Notes.css";

export const Notes = ({ notes }) => {
  return (
    <div className="notes-container">
      <h2>My Notes</h2>
      <div className="dotted-bottom"></div>
      {notes.map((note, index) => (
        <div key={index} className="note-card">
          <h3>{note.heading}</h3>
          <p>{note.note}</p>
        </div>
      ))}
    </div>
  );
};
