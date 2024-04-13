const express = require("express")
const app = express()
const mongo = require('./db')
var cors = require('cors')
const Port = 5000;

app.use(cors())
app.use(express.json())

app.use('/products',require('./routes/products'))
app.use('/user',require('./routes/user'))
app.use('/cart',require('./routes/Cart'))

// port number
app.listen(Port,()=>{
    console.log('app is listening at ' + Port);
})







