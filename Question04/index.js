const express = require('express')
const app = express()

let randomNumber = Math.floor(Math.random() * 100)
console.log(randomNumber);
app.get('/random', (req, res) => {
    res.send({
        random: randomNumber
    })
})

app.listen(3003)