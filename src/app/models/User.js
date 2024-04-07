const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const User = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNum: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
},
{
    timestamps: true,
}
);

// Add plugin
User.plugin(
    mongooseDelete, 
    {
        overrideMethods: 'all',
        deletedAt : true
    },
);

module.exports = mongoose.model('User', User);