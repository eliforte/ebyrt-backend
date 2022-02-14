const express = require('express');
const {
  Create, List, Delete, Update,
} = require('.');
const { Tasks, UpdateTask } = require('../../global/middlewares/validation');
const { VerifyToken } = require('../../global/middlewares/auth');

const router = express.Router({ mergeParams: true });

router.get('/', VerifyToken, List);
router.post('/', VerifyToken, Tasks, Create);
router.delete('/:id', VerifyToken, Delete);
router.put('/:id', VerifyToken, UpdateTask, Update);

module.exports = router;
