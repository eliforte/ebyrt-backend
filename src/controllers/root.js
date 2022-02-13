const express = require('express');
const routerLogin = require('./users/login/route');
const routerRegister = require('./users/register/route');
const routerTask = require('./tasks/route');
const { Login, Register } = require('../global/middlewares/validation');

const root = express.Router({ mergeParams: true });

root.use('/login', Login, routerLogin);
root.use('/register', Register, routerRegister);
root.use('/task', routerTask);

module.exports = root;
