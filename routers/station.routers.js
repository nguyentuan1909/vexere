const express = require('express');
const {Station}  = require('../models');
const { create, getAll, updateById, getDetailById, deleteById } = require('../controllers/station.controllers');
const {checkExist} = require('../middlewares/validations/validation');
const { authenticate } = require('../middlewares/auth/authenticate');
const { authorize } = require('../middlewares/auth/authorize');

const router = express.Router();

router.post('/', authenticate,authorize(['admin', 'super_admin']), create);
router.get('/', getAll);
router.get('/:id', getDetailById);
router.put('/:id',authenticate, checkExist(Station) ,updateById);
router.delete('/:id',authenticate, deleteById);

module.exports = router;