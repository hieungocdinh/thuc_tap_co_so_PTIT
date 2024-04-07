const newsRoute  = require('./news');
const siteRoute  = require('./site');
const menuRoute  = require('./menu');
const recruitmentRoute  = require('./recruitment');
const feedbackRoute  = require('./feedback');
const adminRoute  = require('./admin');
const loginRoute  = require('./login');


function router(app) {
    app.use('/login', loginRoute);
    app.use('/news', newsRoute);
    app.use('/menu', menuRoute);
    app.use('/recruitment', recruitmentRoute);
    app.use('/feedback', feedbackRoute);
    app.use('/admin', adminRoute);
    app.use('/', siteRoute);
}

module.exports = router;
