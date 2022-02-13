require('dotenv').config();
const jwt = require('jsonwebtoken');
const { UNAUTHORIZED } = require('http-status-codes').StatusCodes;
const messages = require('../../helpers/messages');
const modelUsers = require('../../../database/users');

const { SECRET } = process.env;
const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (body) => jwt.sign({ data: body },SECRET, jwtConfig);

const verifyToken = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(UNAUTHORIZED).json(messages.MISSING_TOKEN_401);
    }
    const decoded = jwt.verify(authorization, process.env.SECRET);
    const { email } = decoded.data;
    const foundedEmail = await modelUsers.findByEmail(email);
    if (!foundedEmail) return next(messages.JWT_MALFORMED_401);
    req.user = decoded.data;
    next();
  } catch (err) {
    next(messages.JWT_MALFORMED_401);
  }
}

module.exports = {
  createToken,
  verifyToken,
};
