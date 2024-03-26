class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news/news');
    }

    // [GET] /news/:slug
    detail(req, res) {
        res.render('news/newsDetail');
    }
}

module.exports = new NewsController();