const express = require('express');

const usersRouter = require('./usersRouter');
const productsRouter = require('./productsRouter');
const ordersRouter = require('./ordersRouter');

function routerApi(app) {
    const router = express.Router();
    app.use('/', router)

    router.use('/users', usersRouter);
    router.use('/products', productsRouter);
    router.use('/orders', ordersRouter);
}

module.exports = routerApi;