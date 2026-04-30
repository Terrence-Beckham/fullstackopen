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
            <p> {props.cheese[0].name} {props.cheese[0].exercises}</p>
            <p> {props.cheese[1].name} {props.cheese[1].exercises}</p>
            <p> {props.cheese[2].name} {props.cheese[2].exercises}</p>
        </div>
    )

}
const Total = (props) => {

    console.log(props)
    return (
        <div>
            <p>{'Number of exercises ' + (props.burgers[0].exercises + props.burgers[1].exercises + props.burgers[2].exercises)}</p>
        </div>

    )
}


const App = () => {
    const course = 'Half Stack application development'
    const parts = [
        {name: 'Fundamentals of React', exercises: 10},
        {name: 'Using props to pass data', exercises: 7},
        {name: 'State of a component', exercises: 14}
    ]

    return (
        <div>
            <Header courses={course}/>
            <Content cheese={parts}/>
            < Total burgers={parts}/>
            {/*<p> {exercises1 + exercises2 + exercises3}</p>*/}
        </div>
    )
}


export default App
