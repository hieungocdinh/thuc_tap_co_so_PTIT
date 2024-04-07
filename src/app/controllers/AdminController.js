const Product = require('../models/Product');
const User = require('../models/User');
const { mutipleMongooseToObject } = require('../../util/mongoose');
const { mongooseToObject } = require('../../util/mongoose');

class AdminController {
    // [GET] /admin
    index(req, res) {
        res.render('admin/index', { layout: 'admin' });
    }

    // [GET] /admin/menu
    menu(req , res, next) {
        Product.find({})
            .then(products => {
                res.render('admin/menu/menu', { layout: 'admin', products: mutipleMongooseToObject(products) });
            })
            .catch(next);
    }

    // [GET] /admin/menu/create
    create(req, res) {
        res.render('admin/menu/menu-create', { layout: 'admin' });
    }
    // [POST] /admin/menu/stored
    stored = (req, res, next) => {
        const product = new Product(req.body);
        product.save()
            .then(() => res.redirect('/admin/menu'))
            .catch(next);
    }

    // [GET] /admin/menu/edit/:id
    edit(req, res, next) {
        Product.findById(req.params.id)
            .then(product => res.render('admin/menu/menu-edit', { layout: 'admin', product: mongooseToObject(product) }))
            .catch(next);
    }
    // [PUT] /admin/menu/edit/:id
    edithandle(req, res, next) {
        Product.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/menu'))
            .catch(next);
    }
    // [DELETE] /admin/menu/delete/:id
    delete(req, res, next) {
        Product.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [GET] /admin/menu/deleted
    deleted(req, res, next) {
        Product.findWithDeleted({deleted : true})
            .then(products => res.render('admin/menu/menu-deleted', {
                layout: 'admin',
                products: mutipleMongooseToObject(products)
            }))
            .catch(next);
    }

    // [PATCH] /admin/menu/recovery/:id
    recovery(req, res, next) {
        Product.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /admin/menu/destroy/:id
    destroy(req, res, next) {
        Product.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    //User
    // [GET] /admin/user
    user(req, res) {
        User.find({})
            .then(users => {
                res.render('admin/user/index', { layout: 'admin', users: mutipleMongooseToObject(users) });
            })
            .catch(() => res.redirect('/admin/user/index'));
    }
    // [GET] /admin/user/create
    userCreate(req, res) {
        res.render('admin/user/create', { layout: 'admin' });
    }
    // [POST] /admin/user/stored
    userStored(req, res,next) {
        User.create(req.body)
            .then(() => res.redirect('/admin/user'))
            .catch(next);
    }
    // [GET] /admin/user/edit/:id
    userEdit(req, res, next) {
        User.findById(req.params.id)
            .then(user => res.render('admin/user/edit', { layout: 'admin', user: mongooseToObject(user) }))
            .catch(next);
    }

    // [PUT] /admin/user/edit/:id
    userEditHandle(req, res, next) {
        User.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/admin/user'))
            .catch(next);
    }

    // [DELETE] /admin/user/delete/:id
    userDelete(req, res, next) {
        User.delete({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [GET] /admin/user/deleted
    userDeleted(req, res, next) {
        User.findWithDeleted({deleted : true})
            .then(users => res.render('admin/user/deleted', {
                layout: 'admin',
                users: mutipleMongooseToObject(users)
            }))
            .catch(next);
    }

    // [PATCH] /admin/user/recovery/:id
    userRecovery(req, res, next) {
        User.restore({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

    // [DELETE] /admin/user/destroy/:id
    userDestroy(req, res, next) {
        User.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('back'))
            .catch(next);
    }

}

module.exports = new AdminController();
