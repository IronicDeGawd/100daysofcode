import express from 'express'
import 'dotenv/config'

const app = express()
const port = process.env.PORT

//get methods :
// app.get("/", (req,res)=> {
//     res.send("Hello from Adi")
// })

// app.get("/profile", (req,res)=> {
//     res.send("Adi is enrolled in engineering course")
// })
// app.get("/twitter", (req,res)=> {
//     res.send("https//x.com/0xironyaditya")
// })

app.use(express.json())

let teaData= []
let nextId= 1

//post method

app.post('/tea',(req, res) => {
    const  {name, price} = req.body
    const newTea = {id: nextId++, name, price}
    teaData.push(newTea)
    res.status(201).send(newTea)
})


//get method
app.get('/teas',(req, res) => {
    res.status(200).send(teaData)
})

app.get('/teas/:id',(req, res) => {
    const tea = teaData.find((t) => t.id === parseInt(req.params.id))
    if(!tea){
        return res.status(404).send(`Not found`)
    }
    else{
        return res.status(201).send(tea)
    }
})

//update method

app.put('/teas/:id',(req, res) => {
    const tea = teaData.find((t) => t.id ===parseInt(req.params.id))
    if(!tea){
        return res.status(404).send(`Not found`)
    }
    const {name, price} = req.body
    tea.name = name
    tea.price = price
    res.status(200).send(tea)
})

//delete method

app.delete('/teas/:id', (req, res) => {
    const index = teaData.findIndex(t=> t.id === parseInt(
        req.params.id
    ))
    if(index===-1){
        return res.status(400).send(`Tea not found`)
    }
    teaData.splice(index,1)
    return res.status(204).send(`Deleted`)
})

app.listen(port,()=>{
    console.log(`Server is running at port: ${port}...`);
})

