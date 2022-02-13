const { Create, ListTask, RemoveTask, FindByName, UpdateTask } = require('../../database/tasks');
const { ApiError: { NewError } } = require('../../global/error/apiError');
const { INVALID_ID_400, TASK_NOT_EXIST_404 } = require('../../global/helpers/messages');
const { ObjectId } = require('mongodb');

const validatedId = (id) => {
  if (!ObjectId.isValid(id)) return NewError(INVALID_ID_400);
};

module.exports.CreateTask = async ({ text, userId, status, createAt }) => {
  return await Create({ text, status, createAt, userId });
};
module.exports.ListTask = async () => await ListTask();

module.exports.UpdateTask = async (id, infoTasks) => {
  validatedId(id);
  delete infoTasks._id;
  const task = await UpdateTask(id, infoTasks);
  if (!task) return NewError(TASK_NOT_EXIST_404);
  return task;
};
