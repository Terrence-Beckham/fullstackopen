const Note = ({ note }) => {
    console.log('This is the note', note);
    return <li>{note.content}</li>
}

export default Note