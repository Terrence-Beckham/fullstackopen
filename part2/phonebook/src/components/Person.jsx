const Person = ({person, deleteContact}) => {
    return (
        <li>{person.name} {person.phoneNumber}
            <button onClick={deleteContact}>Delete</button>
        </li>
    )


}

export default Person
