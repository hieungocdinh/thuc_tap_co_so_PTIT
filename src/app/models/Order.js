const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Order = new Schema({
    name: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    address: { type: String, required: true },
    phoneNum: { type: String, required: true },
    dateAdd: { type: Date, required: true },
    complete: { type: Boolean, required: true },
    active: { type: Boolean, required: true },
    isPaid: { type: Boolean, required: true },
});

module.exports = mongoose.model('Order', Order);