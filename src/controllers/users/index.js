const { ACCEPTED } = require('http-status-codes').StatusCodes;
const service = require('../../services/users');

module.exports.Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const loginAccepted = await service.loginUser({ email, password });
    return res.status(ACCEPTED).json({ token: loginAccepted });
  } catch (err) {
    next(err)
  }
};
