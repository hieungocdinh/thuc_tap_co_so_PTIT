class MenuController {
    // [GET] /menu
    index(req, res) {
        res.render('menu/menu');
    }
    // [GET] /menu/item
    show(req, res) {
        res.render('menu/menuItem');
    }
}

module.exports = new MenuController();