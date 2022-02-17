const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    email: String,
    address: String,
    products: Array,
    status: String,
    credit: String,
});

module.exports = mongoose.model('Order', orderSchema)