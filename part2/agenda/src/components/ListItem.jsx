

const ListItem = ({person , handle}) => {
    return(
        <div>
            <p> {person.name} - {person.number}</p>
            <button onClick={() => handle(person)}>Delete</button>
        </div>
    )
}


export default ListItem