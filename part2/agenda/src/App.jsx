import { useState } from 'react'

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

    const newPersons = persons.concat({name:newName, number: newNumber})
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
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNewName} />
        </div>
        <div>
          number: <input type="tel" pattern='[0-9]{3}-[0-9]{2}-[0-9]{6}' value={newNumber} onChange={handleNewNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <div>
        filter shown with <input type='text' onChange={handleFilter} value={filter} />
      </div>

      <h2>Numbers</h2>
      {persons.filter( w => w.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())).map( person => <p key={person.id}>{person.name} - {person.number}</p>)}
    </div>
  )
}

export default App