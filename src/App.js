import React, { useState } from 'react';
import './App.css';
import Note from './Components/Note'

const App = (props) => {

  const [notes, setNotes] = useState(props.notes)
  const notesList = props.notes.map((note) => <Note key={note.id} note={note.content} />)

  return (
    <div>
      <h1>Notes</h1>
      <ul>
      {notesList}
      </ul>
    </div>
  )
}

export default App