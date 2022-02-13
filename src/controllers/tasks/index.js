const { ACCEPTED, OK, NO_CONTENT } = require('http-status-codes').StatusCodes;
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

module.exports.List = async (req, res, next) => {
  try {
    const list = await service.listTasks();
    return res.status(OK).json(list);
  } catch (err) {
    next(err)
  }
};

module.exports.Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.removeTask(id);
    return res.status(NO_CONTENT).end();
  } catch (err) {
    next(err)
  }
};
