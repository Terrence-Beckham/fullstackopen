const Content = (props) => {
    console.log(props)
    return (
        <div>
            <h1> {props.content.name}</h1>
               <p> {props.content.parts[0].name} {props.content.parts[0].exercises}</p>
               <p> {props.content.parts[1].name} {props.content.parts[1].exercises}</p>
               <p> {props.content.parts[2].name} {props.content.parts[2].exercises}</p>

                <p>{'Number of exercises ' + (props.content.parts[0].exercises + props.content.parts[1].exercises + props.content.parts[2].exercises)}</p>

            </div>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {name: 'Fundamentals of React', exercises: 10},
            {name: 'Using props to pass data', exercises: 7},
            {name: 'State of a component', exercises: 14}
        ]
    }

    return (
        <div>
            <Content content={course}/>
        </div>
    )
}


export default App
