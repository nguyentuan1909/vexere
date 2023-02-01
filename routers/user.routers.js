const express = require('express');

const { register, login, uploadAvatar, getAllTrip} = require('../controllers/user.controllers');
const { authenticate } = require('../middlewares/auth/authenticate');
const {uploadImage} = require('../middlewares/uploads/images.uploads');

const router = express.Router();

router.get('/get-all-trip', getAllTrip);
router.post('/register', register);
router.post('/login', login);
router.post('/upload-avatar',authenticate, uploadImage('avatars','avatar'), uploadAvatar);


module.exports = router;