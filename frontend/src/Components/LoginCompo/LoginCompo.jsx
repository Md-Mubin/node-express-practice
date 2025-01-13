import React, { useState } from 'react'
import './LoginCompo.css'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { userDataReducers } from '../../Slices/UserSlice'

const LoginCompo = () => {

    // =========== All hooks
    const [form, setForm] = useState({ email: "", password: "" })
    const [formError, setFormError] = useState({ emailError: "", passwordError: "" })

    // =========== For navigation
    const navigate = useNavigate()

    // =========== For Dispatch
    const dispatch = useDispatch()

    // =========== handleing submit part
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!form.email) {
            setFormError((prev) => ({ ...prev, emailError: "Please Enter Your Email" }))
        }
        if (!form.password) {
            setFormError((prev) => ({ ...prev, passwordError: "Please Enter Your Password" }))
        }
        else {
            axios.post("http://localhost:3000", form)
                .then((response) => {
                    if (response.data.userData) {

                        navigate('/profile')

                        dispatch(userDataReducers(response.data.userData))

                        localStorage.setItem("loginUser", JSON.stringify(response.data.userData))

                        toast.success(`${response.data.msg}`, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                        })
                    } else {
                        toast.error(`${response.data.msg}`, {
                            position: "top-right",
                            autoClose: 1000,
                            hideProgressBar: false,
                            closeOnClick: false,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                            transition: Bounce,
                        })
                    }
                })
        }
    }

    return (
        <>
            <section className='loginSection'>
                <div className="container">
                    <ul className='loginCol'>
                        <h1>Please Login</h1>

                        <form onSubmit={handleSubmit} className='loginForm'>

                            {/* email part */}
                            <ul className='emailPart'>
                                <input

                                    type="email"

                                    value={form.email}

                                    placeholder='Your Email...'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })), setFormError((prev) => ({ ...prev, emailError: "" })) }}

                                />
                                <li>{formError.emailError}</li>
                            </ul>

                            {/* password part */}
                            <ul className='passwordPart'>
                                <input

                                    type="password"

                                    value={form.password}

                                    placeholder='Password...'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, password: e.target.value })), setFormError((prev) => ({ ...prev, passwordError: "" })) }}

                                />
                                <li>{formError.passwordError}</li>
                            </ul>

                            <button>Login</button>
                        </form>

                        <li className='gotoReg'>Don't Have Account? Go to
                            <Link to={"/register"}>Register</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default LoginCompo