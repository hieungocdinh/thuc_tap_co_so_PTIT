const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Product = new Schema({
    name: { type: String, required: true},
    img: { type: String, required: true}, 
    type: { type: String, required: true },
    price: { type: Number, required: true},
    description: { type: String, required: true },
    slug: { type: String, slug: "name", unique: true}, 
},
{
    timestamps: true,
}
);

// Add plugin
mongoose.plugin(slug);
Product.plugin(
    mongooseDelete, 
    {
        overrideMethods: 'all',
        deletedAt : true
    },
);

module.exports = mongoose.model('Product', Product);