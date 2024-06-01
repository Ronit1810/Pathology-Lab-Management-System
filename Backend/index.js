/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv') // use to read .env file
const bodyParser = require('body-parser');
const {connection} = require('./config/connection.js');
const { route } = require('./routes/testRoutes.js');


//configuration for .env file
dotenv.config();


//database connection and database config
connection()

const app = express();


//middleware
app.use(bodyParser.json())

app.use('/test',route)

// port (eg: localhost:8000)
const PORT = process.env.PORT || 8000;


//API
// app.get('/',(req,res)=>{
//     res.json({
//         "name":"ronit",
//         "age":"22"
//     })
// })



app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
})