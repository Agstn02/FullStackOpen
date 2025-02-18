
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const total = course.parts.reduce((acc, part) => acc + part.exercises, 0)
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default App

const Header = (props) =>{
  console.log(props)
  return (
    <h1>{props.title}</h1>
  )
}

const Content = (props) =>{
  console.log(props)
  return(
    <>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises}/>
    </>
  )
}

const Part = (props) =>{
  return(
    <p>
      {props.part} {props.exercise}
    </p>
  )
}


const Total = (props) =>{
  return(
    <p>Number of exercises {props.total}</p>
  )
}