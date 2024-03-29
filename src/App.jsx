import React from 'react';
import { useState } from 'react';

import Counter from './components/Counter';
import AddNoteForm from './components/AddNoteForm';
import Filters from './components/Filters';
import NoteList from './components/NoteList';

function App() {

  const [notes, setNotes] = useState([
    { id: 1, text: "première note" },
    { id: 2, text: "deuxième note" },
    { id: 3, text: "troisième note" }
  ]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  function onRemoveBtnHandler(noteToDelete) {
    // on garde toutes les notes qui ne sont pas celles à supprimer
    const newNotes = notes.filter(note => note.id !== noteToDelete.id)
    // const newNotes = notes.filter(note => note !== noteToDelete)
    setNotes(newNotes);
  }

  return (
    <>
      <h1>Mes notes</h1>
      <Counter notes={notes}/>
      <AddNoteForm onAddNote={handleAddNote}/>
      <Filters />
      <NoteList notes={notes} onRemoveBtn={onRemoveBtnHandler} />
    </>
  );
};

export default App;