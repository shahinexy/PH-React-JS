import { useEffect, useState } from "react"
// import style sheet 
import './users.css'
import UsersDetails from "./Userdetails"

export default function User(){
    const [user, setUser] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUser(data))
    },[])

    return(
        <div className="box">
            <h2>User: {user.length}</h2>
            {
                user.map(users => <UsersDetails details={users}></UsersDetails>)
            }
        </div>
    )
}

/**
 * 1. declear a state to holde the data.
 * 2. useEffect whit call back and dependencey array.
 * 3. use featch to load data.
 */