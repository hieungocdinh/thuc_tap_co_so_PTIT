const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderItem = new Schema({
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    order: { type: Schema.Types.ObjectId, ref: 'Order', required: true },
    quantity: { type: Number, required: true },
    dateAdd: { type: Date, required: true },
});

module.exports = mongoose.model('OrderItem', OrderItem);