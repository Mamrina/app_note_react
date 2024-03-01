import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Filters from './components/Filters.jsx'
import Counter from './components/Counter.jsx'
import AddNote from './components/AddNoteForm.jsx'
import './index.css'
import AddNoteForm from './components/AddNoteForm.jsx'
import NoteList from './components/NoteList.jsx'
import NoteListItem from './components/NoteListItem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
      {/* <AddNoteForm />
      <Filters />
      <Counter />
      <NoteList />
      <NoteListItem /> */}
  </React.StrictMode>,
)
