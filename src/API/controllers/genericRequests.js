import Axios from "axios";

export default function getRequest(route) {
    return Axios.get(`http://localhost:3001/${route}`)
}

export function deleteRequest(route) {
    console.log(`http://localhost:3001/delete/${route}`)
    return Axios.delete(`http://localhost:3001/api/delete/${route}`)
}
