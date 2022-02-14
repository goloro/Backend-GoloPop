const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    email: String,
    address: {
        contry: String,
        fullName: String,
        phone: String,
        address1: String,
        postalCode: String,
        city: String,
        province: String,
    },
    products: Array,
    status: String,
});

module.exports = mongoose.model('Order', orderSchema)