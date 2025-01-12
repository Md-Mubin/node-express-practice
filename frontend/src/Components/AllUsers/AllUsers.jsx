import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AllUsers = () => {

    const [users, setUsers] = useState([])
    const [loginUser, setLoginUser] = useState([])

    useEffect(()=>{

        axios.get("http://localhost:3000/allUsers")
        .then((response)=>setUsers(response.data))

        axios.get("http://localhost:3000/login")
        .then((response)=>setLoginUser(response))
        
    },[])
    
    console.log(users)
    return (
        <>
            <section className='allUsersSection'>
                <div className="container">
                    <ul className='usersRow flex flex-wrap'>
                        {
                            users.map((items)=> items.email !== loginUser.email && (
                                <li key={items.id} className='w-[300px] h-[100px] border'>
                                    <h4>{items.name}</h4>
                                    <p>{items.info}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AllUsers