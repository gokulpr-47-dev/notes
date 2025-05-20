import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import "./App.css";
import { Notes } from "./components/Notes";
import { createNote, fetchNotes } from "./services/noteServices";

function App() {
  const [headingPlaceholder, setHeadingPlaceholder] = useState("Enter Heading");
  const [fetchedNotes, setFetchedNotes] = useState([]);
  const [heading, setHeading] = useState("");
  const [note, setNote] = useState("");

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const notes = await fetchNotes();
        console.log(notes);
        setFetchedNotes(notes);
      } catch (err) {
        console.error("Failed to fetch notes:", err);
      }
    };

    loadNotes();
  }, []);

  const handleSubmit = async () => {
    try {
      const newNote = await createNote({ heading, note });
      setFetchedNotes((prevNotes) => [...prevNotes, newNote]);
      setHeading("");
      setNote("");
    } catch (err) {
      console.error("Failed to create note:", err);
    }
  };

  return (
    <div className="app-container">
      <div className="box heading">
        <input
          type="text"
          placeholder={headingPlaceholder}
          value={heading}
          onFocus={() => setHeadingPlaceholder("")}
          onBlur={() => setHeadingPlaceholder("Enter Heading")}
          onChange={(e) => setHeading(e.target.value)}
        />
      </div>
      <div className="box note">
        <textarea
          rows={40}
          cols={70}
          placeholder="Enter your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      <div className="add-button">
        <div></div>
        <Button variant="outlined" color="on primary" onClick={handleSubmit}>
          Add Note
        </Button>
      </div>
      <Notes notes={fetchedNotes} />
    </div>
  );
}

export default App;
