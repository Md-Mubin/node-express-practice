// ========== all variables and imports
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const app = express()
const users = require('./users')

// ========== all uses with app
app.use(cors())
app.use(express.json())

// ========== port
app.listen(3000, () => {
    console.log("working")
})

// =============== login post data
app.post("/", (req, res) => {
    const { email, password } = req.body

    const user = users.find((items) => items.email === email)

    if (!user) {
        res.send({ msg: "Email is wrong" })
    }
    if (user.password !== password) {
        res.send({ msg: "Pass is wrong" })
    }

    res.send(user)
})

// =============== all users get data
app.get("/allUsers", (req, res) => {
    res.send(allUsers)
    res.end()
})
