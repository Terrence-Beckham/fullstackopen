import {useEffect, useState} from 'react'
import Note from "./components/Note.jsx";
import noteService from "./services/notes";

function App() {
    const [notes, setNotes] = useState([])
    const [newNote, setNewNote] = useState('')
    const [showAll, setShowAll] = useState(true)

    const toggleImportanceOf = (id) => {
        console.log(`importance of  ${id}  needs to be toggled`)
        const note = notes.find((note) => note.id === id)
        const changedNote = {...note, important: !note.important}

        noteService
            .update(note.id, changedNote)
            .then(returnedNote => {
                setNotes(notes.map((note) => note.id === id ? returnedNote : note))
            })
            .catch(error => {
                alert(`the note  ${note.content} was already deleted from server`)
                setNotes(notes.filter(n => n.id !== id))
            })
    }

    useEffect(() => {
        console.log('effect')
        noteService
            .getAll()
            .then(newNotes => {
                setNotes(newNotes)
            })
    }, [])


    const addNote = (event) => {
        event.preventDefault()
        const noteObject = {
            content: newNote,
            important: Math.random() > 0.5,
            // id: String(notes.length + 1)
        }

        const setNoteIfNotEmpty = () => {
            // setNotes(notes.concat(noteObject))
            noteService
                .create(noteObject)
                .then(returnedNote => {
                    setNotes(notes.concat(returnedNote))
                    console.log(returnedNote)
                    console.log(` This was the note added ${returnedNote}`)
                    setNewNote("")
                })
        }

        noteObject.content !== ""
            ? setNoteIfNotEmpty()
            : alert("This can't be empty")
    }

    const handleNoteChange = (event) => {
        // console.log('This is the new event', event.target.value)
        setNewNote(event.target.value)
    }

    const notesToShow = showAll
        ? notes
        : notes.filter((note) => note.important === true)
    console.log('These are the notes to show', notesToShow)

    return (
        <div>
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>show
                    {showAll ? ' important' : ' all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note
                        key={note.id}
                        note={note}
                        toggleImportance={() => toggleImportanceOf(note.id)}
                    />
                )}
            </ul>

            <form onSubmit={addNote}>
                <input
                    value={newNote}
                    onChange={handleNoteChange}
                />
                <button type="submit">save</button>
            </form>
        </div>
    )
}

export default App
