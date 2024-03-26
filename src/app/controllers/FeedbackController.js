class FeedbackController {
    // [GET] /feedback
    index(req, res) {
        res.render('feedback/feedback');
    }
}

module.exports = new FeedbackController();