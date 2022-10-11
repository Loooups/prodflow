let objetGlobal = {name:"nameTest" , address:{address1:"testAdresse"} , informations:["testProductionLigne1" , "testUnitNumberProdution1" , "testLigneNumber1"]};

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {

    let data = {
        age: 22,
        name:"Jane"
    }
    res.json(data)
})

app.get('/site-info', (req, res) => {
    res.json(objetGlobal)
})

app.post('/post-example', (req, res) => {

    res.send("data received")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


