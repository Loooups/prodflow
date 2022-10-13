let objetGlobal = {
    name:"Polar Production" , 
    address:{address1:"81, rue de Marie 19 896"} , 
    productionLines: [
        {id:0, productionRate:1000},
        {id:1, productionRate:500},   
    ]
};
let auten = false;

const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json());
app.use(express.text());

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
let newId = (objetGlobal.productionLines.length - 1)+1;
    objetGlobal.productionLines.push({id:newId, productionRate:0});


    res.send("new-production-line received")
})

app.post('/production-line/:id/update', (req, res) => {
    console.log('ID:', req.params.id, typeof(req.params.id));
    console.log('production-rate:', req.body, typeof(req.body));
    let reqParaId = Number(req.params.id);
    console.log(reqParaId);
    let result = objetGlobal.productionLines[reqParaId].productionRate=req.body.productionRate;
    console.log(result);
    res.send("production-line updated")
    })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


