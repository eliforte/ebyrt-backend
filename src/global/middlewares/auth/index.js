require('dotenv').config();
const jwt = require('jsonwebtoken');

const { SECRET } = process.env;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (body) => jwt.sign({ data: body },SECRET, jwtConfig);

module.exports = {
  createToken,
};
