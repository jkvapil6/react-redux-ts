import React from 'react';
import './App.css';

import { NewNoteInput } from './components/NewNoteInput' 
import { useSelector, useDispatch } from 'react-redux';
import { NotesState } from './reducers/notesReducer'
import { addNote } from './actions/actions'


function App() {
  const notes = useSelector<NotesState, NotesState["notes"]>((state) => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note:string) => {
    dispatch(addNote(note))
  }

  return (
    <div>
      <NewNoteInput addNote={onAddNote} />
    
      <hr />
      <ul>
        { notes.map((note) => {
          return <li key={note}>{note}</li>
        }) }
      </ul>

    </div>
  );
}

export default App;
