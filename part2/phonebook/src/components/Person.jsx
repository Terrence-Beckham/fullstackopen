const Person = ({person}) => {
    console.log('This is the person', person);
    return <h4>{person.name}</h4>
}

export default Person