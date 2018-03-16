const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Routers
const userRouter = require('./api/routers/users');
const tableRouter = require('./api/routers/tables');
const categoryRouter = require('./api/routers/categories');
const productRouter = require('./api/routers/products');
const reservationRouter = require('./api/routers/reservations');

//connecting to mongoDB
//mongoose.connect('mongodb://localhost:27017/XKitchen');
mongoose.connect('mongodb://admin:admin1234@ds115729.mlab.com:15729/xkitchen')
mongoose.Promise = global.Promise;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

app.use('/api/users', userRouter);
app.use('/api/tables', tableRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/products', productRouter);
app.use('/api/reservations', reservationRouter);

app.use((req, res, next) => {
    console.log("Server is Running...");  
    res.status(200).json({
        message: "Hi, I'm learning Node JS"
    });
});


module.exports = app;