const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const logger = require('morgan')
app.use(logger('dev'))


//test server
app.get("/", (req,res)=>{
    res.status(200).send("Server route works fine")
})


//import routes
app.use('/ussd', require('./routes/USSD'))

app.listen(PORT, ()=> console.log(`Server running on PORT : ${PORT}`))