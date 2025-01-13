// ========== all variables and imports
const express = require("express")
const cors = require("cors")
const fs = require("fs")
const app = express()
const users = require('./users')
const path = require("path")
const router = express.Router()

// ========== all uses with app
app.use(cors())
app.use(express.json())
app.use("/", router)

// ========== port
app.listen(3000, () => {
    console.log("working")
})

// =============== login post data
router.post("/", (req, res) => {
    const { email, password } = req.body
    
    const user = users.find((items) => items.email === email)
    
    if (!user) {
        return res.send({ msg: "Email is wrong" })
    }
    if (user.password !== password) {
        return res.send({ msg: "Pass is wrong" })
    }
    
    return res.send({userData : user , msg : "Login Successfull"})
})

// =============== register post data
const usersFilePath = path.join(__dirname, "users.js");
let allUsers = require(usersFilePath);

app.post("/register", (req, res) => {
  const { email, password } = req.body

  if (!email) {
    return res.send({ error: "Email is required" })
  }
  if (!password) {
    return res.send({ error: "Password is required" })
  }

  const userExists = allUsers.find((user) => user.email === email)
  if (userExists) {
    return res.send({ error: "User already exists" });
  }

  const newUser = { id: allUsers.length + 1, email, password }
  allUsers.push(newUser)

  const updatedUsersContent = `const users = ${JSON.stringify(allUsers, null, 2)};\n\nmodule.exports = users;`
  fs.writeFileSync(usersFilePath, updatedUsersContent, "utf8")

  res.send({ successMsg: "User registered successfully!" })
})

// =============== all users get data
app.get("/allUsers", (req, res) => {
    res.send(users)
    res.end()
})
