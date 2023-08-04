const express = require('express')
const router = express.Router()

// /admin routes

router.get('/add',(req,res,next)=>{
    console.log('this is app middleware')
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"> <input type="number" name="range"> <button type="submit" >Submit</button></form>')
    
})

router.post('/product',(req,res,next)=>{
    // res.send(`<h1>${req.body}</h1>`)
    console.log(req.body)
    // res.redirect('/')
})
module.exports = router;