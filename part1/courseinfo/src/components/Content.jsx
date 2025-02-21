import Part from "./Part"

const Content = ({parts}) =>{
    return(
      <>
       { parts.map((part,i ) => <Part part={part.name} exercise={part.exercises}  key={i}/>)}
      </>
    )
  }

  export default Content;