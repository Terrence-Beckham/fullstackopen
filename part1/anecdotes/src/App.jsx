import {useState} from 'react'

const App = () => {
    const anecdotes = [
        {id: 0, text: 'If it hurts, do it more often.', votes: 0},
        {id: 1, text: 'Adding manpower to a late software project makes it later!', votes: 0},
        {
            id: 2,
            text: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
            votes: 0
        },
        {
            id: 3,
            text: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
            votes: 0
        },
        {id: 4, text: 'Premature optimization is the root of all evil.', votes: 0},
        {
            id: 5,
            text: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough tvotes:0},o debug it.',
            votes: 0
        },
        {
            id: 6,
            text: 'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
            votes: 0
        },
        {id: 7, text: 'The only way to go fast, is to go well.', votes: 0},
    ]
    const [selected, setSelected] = useState(anecdotes[0])
    const [currentAnecdotes, setCurrentAnecdotes] = useState(anecdotes)
    console.log(selected)


    const getRandomAnecdote = () => {
        const randomAnecdote = Math.floor(Math.random() *currentAnecdotes.length)
        console.log('This is the random anecdote', randomAnecdote)
        return randomAnecdote
    }

    const handleSetSelected = () => {
        const newSelection = getRandomAnecdote()
        console.log('This is the new selection', newSelection)
        const selectedAnecdote = currentAnecdotes[newSelection]
        console.log('This is the selected anecdote', selectedAnecdote)
        // selectedAnecdote.votes = (selectedAnecdote.votes += 1)
        setSelected(selectedAnecdote)
    }

    const handleUpvote = () => {
        const currentSelection = selected
        const id = currentSelection.id


        // console.log('This is the new selection id', currentSelection.id)
        // const votes = currentSelection.votes
        // console.log('This is the votes of the current selection', votes)
        // const newSelection = {...currentSelection, votes: votes + 1}
        // console.log('This is the new selection votes', newSelection)

       const newAnecdotes = anecdotes.map(anecdote =>
           anecdote.id === id? {...anecdote, votes: + 1} : anecdote
       );
        console.log('these are the updated anecdotes',newAnecdotes)
        // setSelected()
        setCurrentAnecdotes(newAnecdotes)
    }

    // const updatedUsers = users.map(user =>
    //     user.id === 2 ? { ...user, active: true } : user
    // );
    return (
        <div>
            <h1>{selected.text}</h1>
            <h1>{selected.votes}</h1>
            <div>
                <button onClick={handleSetSelected}>Next Anecdote</button>
                <button onClick={handleUpvote}> Vote</button>
            </div>
        </div>
    )
}

export default App