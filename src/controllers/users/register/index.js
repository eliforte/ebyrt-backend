const { CREATED } = require('http-status-codes').StatusCodes;
const service = require('../../../services/users');

module.exports.Register = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const newUser = await service.createUser({ email, password, name });
    return res.status(CREATED).json({ message: 'Successfully created user!', token: newUser });
  } catch (err) {
    next(err);
  }
};
