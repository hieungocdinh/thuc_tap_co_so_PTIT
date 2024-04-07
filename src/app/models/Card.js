const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Card = new Schema({
    userId: { type: String, required: true },
});

module.exports = mongoose.model('Card', Card);