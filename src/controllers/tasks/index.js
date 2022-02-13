const { ACCEPTED, OK, NO_CONTENT } = require('http-status-codes').StatusCodes;
const { CreateTask, ListTasks, RemoveTask, UpdateTask } = require('../../services/tasks');

module.exports.Create = async (req, res, next) => {
  try {
    const { _id: userId } = req.user;
    const { text, status, createAt } = req.body;
    await CreateTask({ text, status, userId, createAt });
    return res.status(ACCEPTED).json({ message: 'Successfully created task!' });
  } catch (err) {
    next(err);
  }
};

module.exports.List = async (req, res, next) => {
  try {
    const list = await ListTasks();
    return res.status(OK).json({ data: list });
  } catch (err) {
    next(err)
  }
};

module.exports.Delete = async (req, res, next) => {
  try {
    const { id } = req.params;
    await RemoveTask(id);
    return res.status(NO_CONTENT).end();
  } catch (err) {
    next(err)
  }
};

module.exports.Update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status, text } = req.body;
    const updateTask = await UpdateTask(id, { status, text });
    return res.status(OK).json(updateTask);
  } catch (err) {
    next(err);
  }
};
