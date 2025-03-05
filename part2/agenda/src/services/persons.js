import axios from "axios";

const url = 'http://localhost:3001/persons'


const getAll = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const add = (person) => {
    const req = axios.post(url, person)
    return req.then(res => res.data)
}


export {getAll, add}