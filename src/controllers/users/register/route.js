const express = require('express');
const { Register } = require('../register');

const router = express.Router({ mergeParams: true });

router.post('/', Register);

module.exports = router;
