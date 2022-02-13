const express = require('express');
const { Create, List, Delete, Update } = require('../tasks');
const { Tasks } = require('../../global/middlewares/validation');
const { VerifyToken } = require('../../global/middlewares/auth');

const router = express.Router({ mergeParams: true });

router.get('/', VerifyToken, List);
router.post('/', VerifyToken, Tasks, Create);
router.delete('/:id', VerifyToken, Delete);
router.put('/:id', VerifyToken, Update);

module.exports = router;
