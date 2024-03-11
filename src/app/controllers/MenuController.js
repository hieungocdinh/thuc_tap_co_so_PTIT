class MenuController {
    // [GET] /news
    index(req, res) {
        res.render('menu');
    }
}

module.exports = new MenuController();