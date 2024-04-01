require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/name', (req, res) => {
  res.send('Piyal Hossein')
})

app.listen(port, () => {
  console.log(`Example app listening on http://127.0.0.1:${port} `)
})