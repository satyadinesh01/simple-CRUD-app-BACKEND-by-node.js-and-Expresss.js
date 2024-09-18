const express = require('express');
const mongoose = require('mongoose');
// const Product = require('./models/product.models.js');
const app = express();
const productRoute = require('./routes/products.route.js');

// Corrected: express.json() should be invoked
app.use(express.json());


// routes 
app.use('/api/products' , productRoute);


app.get('/', (req, res) => {
    res.send("hello satya, this is from the server side by node js & express");
});

// Mongoose connection
mongoose.connect("mongodb+srv://satyadinesh7642:111222333@backenddb.4mxtp.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB")
    .then(() => {
        console.log("connected to database successfully");
        // Start the server
        app.listen(3000, () => {
            console.log("server is running on port 3000");
        });
    })
    .catch(() => {
        console.log("connection failed!");
    });
