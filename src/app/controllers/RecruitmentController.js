class RecruitmentController {
    // [GET] /recruitment
    index(req, res) {
        res.render('recruitment/recruitment');
    }

    // [GET] /recruitment/detail
    detail(req, res) {
        res.render('recruitment/recruitmentDetail');
    }
}

module.exports = new RecruitmentController();