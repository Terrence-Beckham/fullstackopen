import {useEffect, useState} from 'react'
import Person from "./components/Person.jsx";

import contactsService from "./services/contacts";


function App() {
    const [persons, setPersons] = useState([])

    const [newName, setNewName] = useState('')
    const [newPhoneNumber, setNewPhoneNumber] = useState('')
    const [filteredPersons, setFilteredPersons] = useState([])
    const [filteredName, setFilteredName] = useState('')
    const [refresh, setRefresh] = useState(0)
    useEffect(() => {
        console.log('effect')
        contactsService
            .getAll()
            .then(contacts => {
                console.log('Persons from the server', contacts)
                setPersons(contacts)
            })
    }, [refresh])


    const updatePersonToList = (person) => {
        contactsService.update(person.id, person)
            .then(returnedContact => {
                setPersons(persons.concat(returnedContact))
                setRefresh(value => value + 1)
            })
        setNewName("")
        setNewPhoneNumber("")
    }
    const addPersonToList = (person) => {
        contactsService.create(person)
            .then(returnedContact => {
                setPersons(persons.concat(returnedContact))
            })
        setNewName("")
        setNewPhoneNumber("")
    }


    const addPerson = (event) => {
        event.preventDefault()

        const newPerson = {name: newName, phoneNumber: newPhoneNumber}

        const matchingPerson = persons.find(person => person.name === newPerson.name)

        if (newName === '') {
            window.alert("You must enter a  valid name")
            return;
        }
        if (newPhoneNumber === '') {
            window.alert("You must enter a  valid phone number")
            return;
        }

        if (matchingPerson !== undefined && newPhoneNumber === matchingPerson.phoneNumber) {
            window.alert("User is already in the phonebook")
        }

        if (matchingPerson === undefined && newPhoneNumber !== "" && newName !== "") {
            addPersonToList(newPerson)
        }
        if (matchingPerson !== undefined && matchingPerson.name === newPerson.name && matchingPerson.phoneNumber !== newPerson.phoneNumber) {
            if (window.confirm(`${matchingPerson.name}  is already added to the phonebook, replace the old number with a new one?`)) {
                const updatedPerson = {...matchingPerson, phoneNumber: newPhoneNumber}
                updatePersonToList(updatedPerson)
            }

        }
    }


    const handleNewPersonChange = (event) => {
        event.preventDefault()
        setNewName(event.target.value)
        // console.log('New person change', event.target.value)
    }


    const handleFilteredNameChange = (event) => {
        // event.preventDefault()
        setFilteredName(event.target.value)

        const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filteredName.toLowerCase()))

        setFilteredPersons(filteredPersons)

        console.log(filteredPersons)
    }

    const handleNewPhoneNumber = (event) => {
        event.preventDefault()
        setNewPhoneNumber(event.target.value)
        console.log('This is the newPhoneNumber', newPhoneNumber)
    }

    const handleDeleteContact = (person) => {

        const updatedPersons = persons.filter(p => p.id !== person.id)
        if (window.confirm('Are you sure you want to delete this contact?')) {
            contactsService.removeContact(person.id).then(() => console.log(`${person.name} was deleted from server`))
            setPersons(updatedPersons)
            console.log(updatedPersons)
        } else {
            console.log(`contact was not deleted ${person.name}`)
        }

    }


    return (
        <div>
            <div>debug: {filteredName}</div>
            <h2>Phonebook</h2>
            <input onChange={handleFilteredNameChange} value={filteredName}/>
            <h1>Add a new Contact</h1>
            <form onSubmit={addPerson}>
                <input
                    value={newName}
                    onChange={handleNewPersonChange}/>
                <div><input
                    value={newPhoneNumber}
                    onChange={handleNewPhoneNumber}/>
                </div>
                <div>
                    <button type='submit'>add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {filteredPersons.length !== 0 ?
                    filteredPersons.map(person =>
                        <Person key={person.name} person={person}
                                deleteContact={() => handleDeleteContact(person.id)}/>)
                    : persons.map(person =>
                        <Person key={person.id} person={person}
                                deleteContact={() => handleDeleteContact(person)}/>)}

            </div>

        </div>
    )
}

export default App
