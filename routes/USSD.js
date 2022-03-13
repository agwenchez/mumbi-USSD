const express = require('express')
const router = express.Router()


router.get("/", (req,res)=>{
    res.send("USSD route test working")
})


module.exports = router