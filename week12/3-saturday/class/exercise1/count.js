const express = require('express')
const app = express()
let theCount = 0

app.use(express.static(__dirname + "/public"))

app.post('/api/increment', function (req, res) {
    theCount++;
    res.send(`${theCount}`)
})

app.post('/api/decrement', function (req, res) {
    theCount--;
    res.send(`${theCount}`)
})

app.get('/api/value', function (req, res) {
  res.send(`${theCount}`)
})

app.get('/api', function (req, res) {
    console.log("I'm here")
    res.send("I'm here")
})

app.listen(3000)