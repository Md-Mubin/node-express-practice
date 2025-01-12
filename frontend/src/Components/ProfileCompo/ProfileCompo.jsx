import React from 'react'
import './ProfileCompo.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'

const ProfileCompo = () => {

    // ========== getting data from redux
    const loginUserSliceData = useSelector((state) => state.userData.value)

    // ========== navigate
    const navigate = useNavigate()

    // ========== handle logout
    const handleLogout=()=>{
        localStorage.removeItem("loginUser")
        navigate("/")
    }

    console.log(loginUserSliceData)
    return (
        <>
            <section className='profileSection'>
                <div className="container">
                    <h1 className=''>Profile Information</h1>

                    <ul className='profileCol'>
                        <li>Name: <span>{loginUserSliceData?.name}</span></li>
                        <li>Username: <span>{loginUserSliceData?.username}</span> </li>
                        <li>Email: <span>{loginUserSliceData?.email}</span> </li>
                        <li>Phone: <span>{loginUserSliceData?.phone}</span> </li>
                        <li>Info: <span>{loginUserSliceData?.info}</span> </li>
                    </ul>
                    <button onClick={handleLogout} className='logoutButton'>Log Out</button>
                </div>

            </section>
        </>
    )
}

export default ProfileCompo