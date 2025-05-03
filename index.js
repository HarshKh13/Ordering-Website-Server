const express = require('express');
const cors = require('cors');
const app = express();
const databaseConnection = require('./databaseConnection');
const items = require('./routes/items');
const cartItems = require('./routes/cartItems')

app.use(cors());
app.use(express.json());
app.use('/api', items);
app.use('/api', cartItems);
databaseConnection();

app.get('/', (req,resp) => {
    resp.send("Hello there");
})

app.listen(8000, () => {
    console.log('Server running!')
});
