// Q.2 Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Expresl
// " ‘/’ → send counter data as {counter:counter}
// " `/increment` → increment counter by 1 and send in response latest data as {counter:counter}
// " `/decrement` → decrement counter by 1 and send in response latest data as {counter:counter}

const express = require('express')
const app = express()
let counter = 0

app.get("/", (req, res) => {
    res.send(`Counter: ${counter}`)
})

app.get("/increment", (req, res) => {
    counter++
    res.send(`Counter: ${counter}`)
})

app.get("/decrement", (req, res) => {
    counter =  counter-1
    res.send(`Counter: ${counter}`)
})
app.listen(3000)