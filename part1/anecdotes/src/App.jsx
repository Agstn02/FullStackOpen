import { useState } from 'react'


function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const votesBLueprint = { 0: 0, 1: 0, 2: 0, 3: 0 , 4: 0, 5: 0, 6: 0, 7: 0 }
  
  //Estados
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(votesBLueprint)

  //Funciones
  const random = ()=> Math.floor(Math.random() * anecdotes.length)
  const HandleNext = () => setSelected(random)
  const HandleVote = () => {
    const newVotes = { ...votes }
    newVotes[selected] += 1
    setVotes(newVotes)
  }
  const mostVoted = () => {
    let max = 0
    let maxIndex = 0
    for (let i = 0; i < anecdotes.length; i++) {
      if (votes[i] > max) {
        max = votes[i]
        maxIndex = i
      }
    }
    return maxIndex
  }
  //Componente
  return (
    <>
    <h1>Anecdote od the day</h1>
      <div>{anecdotes[selected]}</div>
      <button onClick={HandleNext}>Nex Anecdote</button>
      <button onClick={HandleVote}>Vote</button>
    <h1>Most voted anecdote</h1>
      <div>{anecdotes[mostVoted()]}</div>
    </>
  )
}

export default App
