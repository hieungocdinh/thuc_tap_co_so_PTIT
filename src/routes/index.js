const newsRoute  = require('./news');
const siteRoute  = require('./site');
const menuRoute  = require('./menu');

function router(app) {
    app.use('/news', newsRoute);
    app.use('/menu', menuRoute);
    app.use('/', siteRoute);
}

module.exports = router;
