let objetGlobal = {
    name:"marcoussy" , 
    address:{address1:"testAdresse"} , 
    productionLines: [
        {id:1, productionRate:1000},
        {id:2, productionRate:500},
                
    ]
};

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

app.post('/new-production-line', (req, res) => {
let newId = objetGlobal.productionLines.length + 1;
    objetGlobal.productionLines.push({id:newId, productionRate:0});


    res.send("new-production-line received")
})

app.post('/production-line/update', (req, res) => {
    console.log(req);
        // objetGlobal.productionLines.update({id = req.id, productionRate = req.update});
    
    
        res.send("production-line updated")
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


