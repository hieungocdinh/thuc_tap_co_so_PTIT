class AdminController {
    // [GET] /admin
    index(req, res) {
        res.render('admin/index', { layout: 'admin' });
    }
}

module.exports = new AdminController();