const express = require('express')
const mongoose = require('mongoose');
const url = 'mongodb://localhost/AlienDBex'

const app = express();

// connect application to db - mongoose.connect function takes url of db - might give you a warning-cause some functions are depricated so we useNewUrlParser to avoid the warning 
mongoose.connect(url, {useNewUrlParser: true});
// con is a connection object - get hold on connection
const con = mongoose.connection

// test if the db is connected
con.on('open', function(){
    console.log('connected...')
})
// Middleware - json
app.use(express.json())

const alienRouter = require('./routes/aliens')
// middleware
app.use('/aliens', alienRouter)

//listen to server
app.listen(9000, function(){
    console.log('Server started')
})