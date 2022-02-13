const { Create, ListTask, RemoveTask, UpdateTask, FindById } = require('../../database/tasks');
const { ApiError: { NewError } } = require('../../global/error/ApiError');
const { INVALID_ID_400, TASK_NOT_EXIST_404, NO_TASKS_ADDED_404, ERROR_CREATE_TASK_417 } = require('../../global/helpers/messages');
const { ObjectId } = require('mongodb');

const validatedId = (id) => {
  if (!ObjectId.isValid(id)) return NewError(INVALID_ID_400);
};

module.exports.CreateTask = async ({ text, userId, status, createAt }) => {
  const newTask = await Create({ text, status, createAt, userId });
  if (!newTask.insertedId) return NewError(ERROR_CREATE_TASK_417);
  return 'Created'
};
module.exports.ListTasks = async (_id) => {
  const allTask = await ListTask(_id);
  if (!allTask.length) return NewError(NO_TASKS_ADDED_404);
  return  allTask;
};

module.exports.UpdateTask = async (id, infoTasks) => {
  validatedId(id);
  delete infoTasks._id;
  const task = await UpdateTask(id, infoTasks);
  if (!task) return NewError(TASK_NOT_EXIST_404);
  return task;
};

module.exports.RemoveTask = async (id) => {
  validatedId(id);
  const findTask = await FindById(id);
  if (!findTask) return NewError(TASK_NOT_EXIST_404)
  await RemoveTask(id);
};
