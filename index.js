const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/facebook', (req, res) => {
    res.send('munazza ismail')
  })
  
app.get('/login', (req, res) => {
    res.send('please login')
  })


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})