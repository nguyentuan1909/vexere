const express = require('express');
const { create, getAll, getDetailById, updateById, deleteById } = require('../controllers/trip.controllers');

const router = express.Router();

router.post('/', create);
router.get('/', getAll);
router.get('/:id', getDetailById);
router.put('/:id', updateById);
router.delete('/:id', deleteById);

module.exports = router;