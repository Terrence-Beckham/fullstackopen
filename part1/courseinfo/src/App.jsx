const Header = (props) => {
  return(
 <div>
    <h1> {props.courses}</h1>
 </div>
  )
}
const Content = (props) =>(

  <div>
   <p> {props.parts} {props.content}</p>
  </div>

)
const  Total = (props) => {

  return(
<div>
<p>{'Number of exercises ' + (props.total + props.total2 + props.total3)}</p>
</div> 
  
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
        <Header courses = {course}/>
        <Content parts ={part1}  content ={exercises1}/>
        <Content parts ={part2}  content ={exercises2}/>
        <Content parts ={part3}  content ={exercises3}/>
       < Total total = {exercises1} total2 ={exercises2} total3={exercises3}/>
      {/*<p> {exercises1 + exercises2 + exercises3}</p>*/}
    </div>
  )
}


export default App
