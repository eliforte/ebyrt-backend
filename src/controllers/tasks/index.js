const { ACCEPTED } = require('http-status-codes').StatusCodes;
const service = require('../../services/tasks');

module.exports.Create = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const { tasks, status } = req.body;
    await service.createTasks({ tasks, status, _id });
    return res.status(ACCEPTED).json({ message: 'Successfully created task!' });
  } catch (err) {
    next(err);
  }
};