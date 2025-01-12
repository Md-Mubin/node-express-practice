import React, { useState } from 'react'
import './RegisterCompo.css'
import { Link } from 'react-router'
import axios from 'axios'
import { Bounce, toast } from 'react-toastify'

const RegisterCompo = () => {

    const [form, setForm] = useState({ email: "", password: "" })
    const [formError, setFormError] = useState({ emailError: "", passwordError: "" })

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:3000/register", form)
            .then((response) => { setError(response.data.massage) },
                toast.success('New User Created', {
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                }))

    }

    return (
        <>
            <section className='registerSection'>
                <div className="container">
                    <ul className='registerCol'>
                        <h1>Register/Create Account</h1>

                        <form onSubmit={handleSubmit} className='registerForm'>

                            {/* email part */}
                            <ul className='emailPart'>
                                <input

                                    type="email"

                                    placeholder='Your Email...'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, email: e.target.value })), setFormError((prev) => ({ ...prev, emailError: "" })) }}

                                />
                                <li>{formError.emailError}</li>
                            </ul>

                            {/* password part */}
                            <ul className='passwordPart'>
                                <input

                                    type="password"

                                    placeholder='Password...'

                                    onChange={(e) => { setForm((prev) => ({ ...prev, password: e.target.value })), setFormError((prev) => ({ ...prev, passwordError: "" })) }}

                                />
                                <li>{formError.passwordError}</li>
                            </ul>

                            <button>Register</button>
                        </form>

                        <li className='gotoLogin'>Have Account? Go to
                            <Link to={"/"}>Login</Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default RegisterCompo