import { useEffect, useState } from 'react'
import PersonForm from './components/PersonForm'
import Filter from './components/Filter'
import NumberList from './components/NumberList'
import {GetAllPersons, AddPerson , DeletePerson , UpdatePerson} from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  //Funciones

  const cleanInput = () => {
      setNewName('')
      setNewNumber('')
  }
  const handleSubmit = (e) => {// TODO : refactorizar esta porqueria
    e.preventDefault();
    
    const alreadyExist = persons.some((el) => el.name === newName)

    if (alreadyExist){
      if(window.confirm(`${newName} ya está en la agenda. Desea actualizar su número?`)){
        const person = persons.find(el => el.name === newName)
        UpdatePerson({...person, number:newNumber})
        .then(data => {
          setPersons(persons.map(el => el.name !== newName ? el : data ))
          cleanInput()
          alert('Exito!')
          
        })
      }
      return
    }

    const newPerson = {name:newName, number: newNumber}

    AddPerson(newPerson)
    .then(data => {
      cleanInput()
      setPersons(persons.concat(data))
    })
  }

  const handleDelete = (person) => {
    if(window.confirm(`Deseas eliminar a ${person.name}?`)){
      DeletePerson(person.id).then(data => {
        window.alert(`${data.name} eliminado correctamente`)
        setPersons(persons.filter(p => p.id !== person.id))
      })
    }

  }
  const handleNewName = e => setNewName(e.target.value)
  const handleNewNumber = e => setNewNumber(e.target.value)
  const handleFilter = e => setFilter(e.target.value)

  //EFFECT:
  useEffect(() => {
      GetAllPersons().then(data => setPersons(data))
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
        <NumberList persons={persons} find={filter} deleteHandler={handleDelete}/>
    </div>
  )
}

export default App