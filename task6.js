const http = require('http')

const express = require('express')

const bodyParser = require('body-parser')


const app = express()

app.use(bodyParser.urlencoded({extended:false}))

app.use('/add',(req,res,next)=>{
    console.log('this is app middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"> <input type="number" name="range"> <button type="submit" >Submit</button></form>')
    
})

app.use('/product',(req,res,next)=>{
    // res.send(`<h1>${req.body}</h1>`)
    console.log(req.body)
    // res.redirect('/')
})

app.use('/',(req,res,next)=>{
    console.log('this is third middleware')
    res.send('<h1>hello this is 200 code because I made some changes</h1>')
})


app.listen(3000)
