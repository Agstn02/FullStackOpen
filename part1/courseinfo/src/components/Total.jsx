const Total = ({parts}) =>{
    
    const total = parts.reduce((a,b) => a + b.exercises,0)
    
    return(
      <p><b>Number of exercises {total}</b></p>
    )
  }

export default Total