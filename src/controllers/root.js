const express = require('express');
const routerLogin = require('./users/login/route');
const routerTask = require('./tasks/route');
const validation = require('../global/middlewares/validation');

const root = express.Router({ mergeParams: true });

root.use('/login', validation.Login, routerLogin);
root.use('/task', routerTask);

module.exports = root;
