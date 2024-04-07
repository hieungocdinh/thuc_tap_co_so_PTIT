const express = require('express');
const router = express.Router();

const adminController = require('../app/controllers/AdminController');
const uploadImgMiddleware = require('../app/middlewares/UploadImgMiddleware');


router.get('/user/create', adminController.userCreate);
router.post('/user/stored', adminController.userStored);
router.get('/user/edit/:id', adminController.userEdit);
router.put('/user/edit/:id', adminController.userEditHandle);
router.delete('/user/delete/:id', adminController.userDelete);
router.delete('/user/destroy/:id', adminController.userDestroy);
router.patch('/user/recovery/:id', adminController.userRecovery);
router.get('/user/deleted', adminController.userDeleted);
router.post('/menu/stored' ,uploadImgMiddleware, adminController.stored);
router.get('/menu/create', adminController.create);
router.delete('/menu/delete/:id', adminController.delete);
router.delete('/menu/destroy/:id', adminController.destroy);
router.patch('/menu/recovery/:id', adminController.recovery);
router.get('/menu/deleted', adminController.deleted);
router.get('/menu/edit/:id', adminController.edit);
router.put('/menu/edit/:id', adminController.edithandle);
router.get('/user', adminController.user);
router.get('/menu', adminController.menu);
router.get('/', adminController.index);

module.exports = router;