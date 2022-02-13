const express = require('express');
const { Create, List, Delete } = require('../tasks');
const { Tasks } = require('../../global/middlewares/validation');
const auth = require('../../global/middlewares/auth');

const router = express.Router({ mergeParams: true });

router.get('/', List);
router.post('/', auth.verifyToken, Tasks, Create);
router.delete('/:id', auth.verifyToken, Delete);

module.exports = router;
