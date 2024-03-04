import { useState } from "react";

export default function AddNoteForm({ onAddNote }) {
  const [newNote, setNewNote] = useState("");

  const handleInputChange = (e) => {
    setNewNote(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    onAddNote({ id, text: newNote });
    setNewNote("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newNote}
        onChange={handleInputChange}
        placeholder="Ma nouvelle note : "
      />
      <button type="submit">Ajouter la note</button>
    </form>
  );
}