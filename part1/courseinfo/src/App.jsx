const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.courses}</h1>
        </div>
    )
}
const Content = (props) => {
    console.log(props)

    return (
        <div>
            <p> {props.name} {props.exercises}</p>
        </div>
    )

}
const Total = (props) => {

    console.log(props)
    return (
        <div>
            <p>{'Number of exercises ' + (props.total + props.total2 + props.total3)}</p>
        </div>

    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = {name: 'Fundamentals of React', exercises: 10}
    const exercises1 = 10
    const part2 = {name:'Using props to pass data', exercises:7}
    const exercises2 = 7
    const part3 = {name:'State of a component', exercises:14}
    const exercises3 = 14

    return (
        <div>
            <Header courses={course}/>
            <Content name={part1.name} exercises={part1.exercises}/>
            <Content name={part2.name} exercises={part2.exercises}/>
            <Content name={part3.name} exercises={part3.exercises}/>
            < Total total={exercises1} total2={exercises2} total3={exercises3}/>
            {/*<p> {exercises1 + exercises2 + exercises3}</p>*/}
        </div>
    )
}


export default App
