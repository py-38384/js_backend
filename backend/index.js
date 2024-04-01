const express = require('express')
require('dotenv').config()
const app = express()

const jokes = [
    {
        id:1,
        text:'this is a jokes',
    },
    {
        id:2,
        text:'this is a jokes NUMBER 2',
    },
    {
        id:3,
        text:'this is a jokes NUMBER 3',
    },
    {
        id:4,
        text:'this is a jokes NUMBER 4',
    },
    {
        id:5,
        text:'this is a jokes NUMBER 5',
    },
]

app.get('/',(req, res)=>{
    res.send('Hallo world')
})

app.get('/api/jokes',(req, res)=>{
    res.json(jokes)
})

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log(`Server started at http://127.0.0.1:${port}`)
})