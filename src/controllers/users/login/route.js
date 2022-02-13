const express = require('express');
const { Login } = require('../login');

const router = express.Router({ mergeParams: true });

router.post('/', Login);

module.exports = router;
