const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CardItem = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    card: { type: Schema.Types.ObjectId, ref: 'Card', required: true },
    quantity: { type: Number, required: true },
    dateAdd: { type: Date, required: true },
});

module.exports = mongoose.model('CardItem', CardItem);