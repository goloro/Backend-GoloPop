const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String,
    price: Number,
    categorie: String,
    image: String,
    stock: String,
});

module.exports = mongoose.model('Product', productSchema)