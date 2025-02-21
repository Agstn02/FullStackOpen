import Input from './input'


const PersonForm = ( {name , number , handleNewName , handleNewNumber , handleSubmit} ) => {
    return(
        <form onSubmit={handleSubmit}>
        <Input name='name' value={name} handler={handleNewName}/>
        <Input name='number' value={number} handler={handleNewNumber}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm