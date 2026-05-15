const Note = ({note, toggleImportance}) => {
    const label = note.important
        ? 'make not important'
        : 'make important'
    return (

        <li>
            {note.content}
            <button onClick={toggleImportance}>{label}</button>
        </li>)
}

export default Note

// if (window.confirm('Are you sure you want to delete this contact?')) {
//     contactsService.removeContact(person.id).then(() => console.log(`${person.name} was deleted from server`))
//     setPersons(updatedPersons)
//     console.log(updatedPersons)
// } else {
//     console.log(`contact was not deleted ${person.name}`)
// }