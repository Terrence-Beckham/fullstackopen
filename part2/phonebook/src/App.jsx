import {useState} from 'react'
import Person from "./components/Person.jsx";


function App() {
    const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
    const [newName, setNewName] = useState('')
    // const [phonebook, setPhonebook] = useState([{name: 'Terrence', phone: '718-256-1234'}])

    const addPerson = (event) => {

        const person = {name: newName}
        const isUserInList = () => persons.some(person => person.name === newName)

        const addPersonToList = (person) => {
            setPersons(persons.concat(person))
            setNewName("")
        }

        event.preventDefault()
        // console.log('these are the current persons', persons)
        isUserInList() ? alert('User is in list') : addPersonToList(person)
        // persons.includes(person) ? alert('${person} is already added to phonebook')
        //     : addPersonToList(person)
    }


    const handleNewPersonChange = (event) => {
        event.preventDefault()
        setNewName(event.target.value)
        // console.log('New person change', event.target.value)

    }
    return (
        <div>
            <div>debug: {newName}</div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <input
                    value={newName}
                    onChange={handleNewPersonChange}/>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <Person key={person.name} person={person}/>)}
        </div>
    )
}

export default App
