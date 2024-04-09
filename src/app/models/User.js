const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const User = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phoneNum: { type: String},
    type: { type: String, default: 'user'},
    name: { type: String},
    dateOfBirth: { type: Date},
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