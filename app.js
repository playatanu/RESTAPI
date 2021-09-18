// connect to mongodb


const uri = "mongodb+srv://admin:euqnIvcHOGt90hG6@cluster0.8xuok.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const fs = require('fs')
app.use(express.json());  /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri, { useNewUrlParser: true })

const connect = mongoose.connection

connect.on('open', () => {

    console.log('Database Connted')
})


const userRouter = require('./routers/users')
const apiRouter = require('./routers/api')
app.use('/users', userRouter)
app.use('/api', apiRouter)

app.get('/', (req, res) => {

    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream('index.html').pipe(res)
})



app.listen(process.env.PORT || 8080, () => {
    console.log('Port Connted')
})

