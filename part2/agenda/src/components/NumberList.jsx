import ListItem from "./ListItem";

const NumberList = ({ persons, filter }) => {
    const list = persons.filter( w => w.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
        
    return(
        <div>
            {list.map( person => <ListItem key={person.id} person={person}/>)}
        </div>
    )
}

export default NumberList;