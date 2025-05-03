const databaseConnection = require('./databaseConnection');
const mongoose = require('mongoose');
const fs = require('fs').promises;
const itemModel = require('./models/itemsModel')

async function insertItems(){
    try{
        await databaseConnection();
        // const database = mongoose.connection.useDb('ecom');
        const data = await fs.readFile('data.json', 'utf8');
        const items = JSON.parse(data);
        const result = await itemModel.insertMany(items);
        console.log(result.length);
        console.log('Items inserted successfully');
    }
    catch(error){
        console.log(error);
    }
    finally{
        await mongoose.connection.close();
        console.log('Database connection closed');
    }
}

insertItems();
