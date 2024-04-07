class LoginController {
    // GET /login
    index(req, res) {
        res.render('login/index',{layout: 'login'});
    }
}

module.exports = new LoginController();