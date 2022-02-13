const { BAD_REQUEST } = require('http-status-codes').StatusCodes;
const {
  SCHEMALogin,
  SCHEMARegister,
  SCHEMATask,
} = require('../../helpers/schemas');

module.exports.Login = async (req, _res, next) => {
  try {
    const { error } = SCHEMALogin.validate(req.body);
    if (error) return next({ message: error.message, status: BAD_REQUEST });
    next();
  } catch (err) {
    next(err)
  }
};

module.exports.Register = async (req, _res, next) => {
  try {
    const { error } = SCHEMARegister.validate(req.body);
    if (error) return next({ message: error.message, status: BAD_REQUEST });
    next();
  } catch (err) {
    next(err)
  }
};

module.exports.Tasks = async (req, _res, next) => {
  try {
    const { text, userId, status } = req.body;
    const { error } = SCHEMATask.validate({ text, userId, status });
    if (error) return next({ message: error.message, status: BAD_REQUEST });
    next();
  } catch (err) {
    next(err)
  }
};
