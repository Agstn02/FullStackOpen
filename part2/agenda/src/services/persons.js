import axios from "axios";

const url = '/persons'



const GetAllPersons = () => {
    const req = axios.get(url)
    return req.then(res => res.data)
}

const AddPerson = (person) => {
    const req = axios.post(url, person)
    return req.then(res => res.data)
}

const DeletePerson = (id) => {
    const reqUrl = url + `/${id}`
    const req = axios.delete(reqUrl)
    return  req.then(res => res.data)
}

const UpdatePerson = (person) => {
    const reqUrl = url + `/${person.id}`
    const req = axios.put(reqUrl, person)
    return req.then(res => res.data)
}

export {GetAllPersons, AddPerson, DeletePerson, UpdatePerson}