const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const databaseConnection = async () => {
    try{
        await mongoose.connect(process.env.DATABASE_CONNECTION_STRING);
        console.log('Connected to Database');
    }
    catch(error){
        console.log(error.message);
    }
}

module.exports = databaseConnection;