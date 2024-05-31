/* eslint-disable no-undef */
const mongoose = require('mongoose')

const connection = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`connected to MONGO DATABASE ${conn.connection.port}`);
    } catch (error) {
        console.log("Error in DB connection");
    }
    
}

// export default connection
module.exports = {connection}