const Product = require('../models/Product');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class MenuController {
    // [GET] /menu
    index(req, res,next) {
        Product.find({})
        .then(products => {
            res.render('menu/menu', { products: mutipleMongooseToObject(products) });
        })
        .catch(next);


        // function categorizeProducts(products) {
        //     const categorizedProducts = {
        //         types: []
        //     };
        
        //     products.forEach(product => {
        //         // Thêm loại đồ uống vào mảng types nếu chưa tồn tại
        //         if (!categorizedProducts.types.includes(product.type)) {
        //             categorizedProducts.types.push(product.type);
        //         }
        
        //         // Phân loại sản phẩm theo loại
        //         if (!categorizedProducts[product.type]) {
        //             categorizedProducts[product.type] = [];
        //         }
        //         categorizedProducts[product.type].push(product);
        //     });
        
        //     return categorizedProducts;
        // }
    }
    // [GET] /menu/item
    show(req, res, next) {
        Product.findOne({ slug: req.params.slug })
            .then(product => {
                res.render('menu/menuItem', { product: mongooseToObject(product) });
            })
            .catch(next);
    }

    // Hàm hỗ trợ để phân loại sản phẩm theo loại
    
}

module.exports = new MenuController();