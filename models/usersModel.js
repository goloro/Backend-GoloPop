const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    name: String,
    lastName: String,
    password: String,
    birthDate: Date,
    creditCards: Array,
    address: Array,
});

module.exports = mongoose.model('User', userSchema)