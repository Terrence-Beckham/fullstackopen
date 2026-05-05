import {useState} from 'react'


const Button = (props) => {
    const {onClick, text} = props
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}

const Statistics = (props) => {
    const {good, neutral, bad} = props
    const all = good + neutral + bad
    const average = (good + (bad * -1)) / all
    const positive = (good / all) * 100

    const roundToHundreths = (number) => {
        return Math.round(number * 100) / 100;
    }
    // const average = (clicks.good + (clicks.bad * -1)) / clicks.total
    if (all === 0) {
        return <p><b>No Feedback Given</b></p>
    }

    // return (
    //     <div>
    //         <p>Good {good}</p>
    //         <p>Neutral {neutral}</p>
    //         <p>Bad {bad}</p>
    //         <p>All {all}</p>
    //         <p>Average {average}</p>
    //         <p>Positive {positive}</p>
    //     </div>
    // )
    return (
        <div>

            <table>
                <tbody>
                <tr>
                    <td>Good {good}</td>
                </tr>
                <tr>
                    <td>Neutral {neutral}</td>
                </tr>
                <tr>
                    <td>Bad {bad}</td>
                </tr>
                <tr>
                    <td>All {all}</td>
                </tr>
                <tr>
                    <td>Average {roundToHundreths(average)}</td>
                </tr>
                <tr>
                    <td>Positive {roundToHundreths(positive)} %</td>
                </tr>
                </tbody>
            </table>


        </div>

    )
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodFeedback = () => {
        const newGood = good + 1
        setGood(newGood)
    }
    const handleNeutralFeedback = () => {
        const newNeutral = neutral + 1
        setNeutral(newNeutral)
    }
    const handleBadFeedback = () => {
        const newBad = bad + 1
        setBad(newBad)
    }

    return (
        <div>
            <h1>Give Feedback</h1>
            <Button onClick={handleGoodFeedback} text='Good'> </Button>
            <Button onClick={handleNeutralFeedback} text='Nuetral'> </Button>
            <Button onClick={handleBadFeedback} text='Bad'> </Button>
            <h1>Statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad}/>

        </div>
        // <Statistics good={good} neutral={neutral} bad={bad}/>
    )


}


export default App
// const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//     setTotal(left + right)
// }
//
