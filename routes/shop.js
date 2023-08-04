const express = require('express')

const router = express.Router()
// /shop routes
router.get('/',(req,res,next)=>{
    console.log('this is third middleware')
    res.send('<h1>hello this is 200 code because I made some changes</h1>')
})

module.exports = router