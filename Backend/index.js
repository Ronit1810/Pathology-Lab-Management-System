/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv') // use to read .env file
const bodyParser = require('body-parser');
const {connection} = require('./config/connection.js');
const  testRoute  = require('./routes/testRoutes.js');
const  patientRoute  = require('./routes/patientRoute.js')
const cors = require('cors')


//configuration for .env file
dotenv.config();


//database connection and database config
connection()

const app = express();


//middleware
app.use(bodyParser.json());
app.use(cors());

// console.log('Test Routes:', testRoute);  // Add this line
// console.log('Patient Routes:', patientRoute);  

app.use('/test',testRoute);
app.use('/patient',patientRoute)

// port (eg: localhost:8000)
const PORT = process.env.PORT || 8000;


//API
app.get('/', (req, res) => {
    res.send("<h1>hello</h1>");
})



app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`);
})