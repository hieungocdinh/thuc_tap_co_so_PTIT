const User = require('../models/User');


class LoginController {
    // GET /login
    index(req, res) {
        res.render('login/index',{layout: 'login'});
    }
    // POST /login/register
    register(req, res, next) {
        User.create(req.body)
            .then(() => res.redirect('/'))
            .catch(next);
    }

}

module.exports = new LoginController();