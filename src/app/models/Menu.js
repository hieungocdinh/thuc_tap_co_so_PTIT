const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Menu = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number},
});

module.exports = mongoose.model('Menu', Menu);