import NoteListItem from "./NoteListItem";

export default function NoteList({ notes, onRemoveBtn }) {
  // Génération des <li> pour chauqe note dans notes
  const listNotes = notes.map((note, index) => (
    <li key={index}>
      {note.text}
      &nbsp;
      <button onClick={(e) => onRemoveBtn(note)}>❌</button>
    </li>
  ));

  return (
    <>
      <p>Ma liste de note : </p>
      <ul>{listNotes}</ul>
    </>
  );
}
