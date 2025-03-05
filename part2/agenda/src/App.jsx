import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import NumberList from './components/NumberList'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
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
    const newPerson = {name:newName, number: newNumber}
    axios
    .post(url, newPerson)
    .then(res => {
      setNewName('')
      setNewNumber('')
      setPersons(persons.concat(res.data))
    })
  }
  const handleNewName = e => setNewName(e.target.value)
  const handleNewNumber = e => setNewNumber(e.target.value)
  const handleFilter = e => setFilter(e.target.value)

  //EFFECT:
  useEffect(() => {
      personService
      .getAll()
      .then(data => setPersons(data))
      
    }
    ,[]
  )


  return (
    <div>
      <h2>Phonebook</h2>
        <Filter filter={filter} handleFilter={handleFilter}/>
      <h3>Add new Person</h3>
        <PersonForm name={newName} number={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} handleSubmit={handleSubmit}/>
      <h2>Numbers</h2>
        <NumberList persons={persons} find={filter}/>
    </div>
  )
}

export default App