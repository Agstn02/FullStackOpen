import { useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import NumberList from './components/NumberList'


const App = () => {
    const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
    ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  //Funciones

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const alreadyExist = persons.find((el) => el.name === newName)
    if (alreadyExist){
      alert(`${newName} ya está en la agenda`)
      return
    }
    const idGen = Math.random() * 10000; // Genero id random parra que no se queje mas adelante cuando renderice un objeto sin id
    const newPersons = persons.concat({name:newName, number: newNumber, id: idGen })
    setNewName('')
    setNewNumber('')
    setPersons(newPersons)
  }
  const handleNewName = e => setNewName(e.target.value)
  const handleNewNumber = e => setNewNumber(e.target.value)
  const handleFilter = e => setFilter(e.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>Add new Person</h3>
        <PersonForm name={newName} number={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
        <NumberList persons={persons} filter={filter}/>
    </div>
  )
}

export default App