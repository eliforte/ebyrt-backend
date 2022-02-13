const express = require('express');
const routerLogin = require('./users/login/route');
const validation = require('../global/middlewares/validation');

const root = express.Router({ mergeParams: true });

root.use('/login', validation.Login, routerLogin);

module.exports = root;
