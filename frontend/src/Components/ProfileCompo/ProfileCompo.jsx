import React from 'react'
import './ProfileCompo.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Bounce, toast } from 'react-toastify'

const ProfileCompo = () => {

    // ========== getting data from redux
    const loginUserSliceData = useSelector((state) => state.userData.value)

    // ========== navigate
    const navigate = useNavigate()

    // ========== handle logout
    const handleLogout=()=>{
        localStorage.removeItem("loginUser")
        navigate("/")
        toast.error(`Loged Out`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
        })
    }

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