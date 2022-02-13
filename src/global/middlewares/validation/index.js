const { BAD_REQUEST } = require('http-status-codes').StatusCodes;
const {
  SCHEMALogin,
  SCHEMARegister,
  SCHEMATask,
  SCHEMAUpdateTask,
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
    const { text, status, createAt } = req.body;
    const { error } = SCHEMATask.validate({ text, status, createAt });
    if (error) return next({ message: error.message, status: BAD_REQUEST });
    next();
  } catch (err) {
    next(err)
  }
};

module.exports.UpdateTask = async (req, _res, next) => {
  try {
    const { text, status } = req.body;
    const { error } = SCHEMAUpdateTask.validate({ text, status });
    if (error) return next({ message: error.message, status: BAD_REQUEST });
    next();
  } catch (err) {
    next(err)
  }
};
