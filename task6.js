const http = require('http')

const express = require('express')

const app = express()

app.use((req,res,next)=>{
    console.log('this is middleware')
    next()
})
app.use((req,res,next)=>{
    console.log('this is another middleware')
    next()
})
app.use((req,res,next)=>{
    console.log('this is third middleware')
    res.send('<h1>hello this is 200 code because I made some changes</h1>')
})

app.listen(3000)
