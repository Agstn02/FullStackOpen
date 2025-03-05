import ListItem from "./ListItem";

const NumberList = ({ persons, find , deleteHandler }) => {
    const list = persons.filter( w => w.name.toLocaleLowerCase().includes(find.toLocaleLowerCase()));
        
    return(
        <div>
            {list.map( person => <ListItem key={person.id} person={person} handle={deleteHandler} />)}
        </div>
    )
}

export default NumberList;