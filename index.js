//to use .env
require('dotenv').config()
const express = require('express')
//import express from "express"

const app = express()

//server at port 4000 on this machine 
const port = 4000
//when production may be another server with diff port so use .env for it


//to serve 'get request' coming from client on / and always listen at / 
//if request arrrived send response in terms of message to client 
app.get('/', (req, res) => {
  res.send('Hello World!')
})

//same for /twitter
app.get('/twitter', (req, res) => {
    res.send('Hello twitter')
  })

app.get('/login',(req,res)=>{
    res.send('<h1>Please login at D website</h1>')
})

app.get('/youtube',(req,res)=>{
    res.send("<h2>chai aur code</h2>")
})


//to take port from .env
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})