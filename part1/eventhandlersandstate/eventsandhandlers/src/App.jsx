import {useState} from 'react'


// const Display = ({counter}) => <div>{counter}</div>


// const Button = ({text, onClick}) => <button onClick={onClick}>{text}</button>
const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const hello = (who)=> {
const handler = () => {
    console.log('hello',who)
}
return handler
}

const Button = (props) => {
    console.log('props value is', props)
    const {onClick, text} = props
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}
const App = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])
    const [total, setTotal] = useState(0)


    const handleLeftClick = () => {
        console.log('left bottom clicked')
        setAll(allClicks.concat('L'))
        const updatedLeft = left + 1
        console.log('left before', left)
        setLeft(updatedLeft)
        console.log('left after', updatedLeft)
        setTotal(updatedLeft + right)
    }


    const handleRightClick = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
        setTotal(left + right)
    }

    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text='left'/>
            <Button onClick={handleRightClick} text='right'/>

            {right}
            <History allClicks={allClicks}/>
            <button onClick={hello('react')}></button>
            <p>total {total}</p>
            <button onClick={()=>console.log('button pressed')} > Touch Me</button>
        </div>
    )

}

export default App