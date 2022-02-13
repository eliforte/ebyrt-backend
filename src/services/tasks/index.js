const { Create, ListTask, RemoveTask, FindByName } = require('../../database/tasks');
const { ApiError: { NewError } } = require('../../global/error/apiError');
const { INVALID_ID_400 } = require('../../global/helpers/messages');
const { ObjectId } = require('mongodb');

const validadeId = (id) => {
  if (!ObjectId.isValid(id)) return NewError(INVALID_ID_400);
};

module.exports.CreateTask = async ({ text, userId, status, createAt }) => {
  return await Create({ text, status, createAt, userId });
};

module.exports.ListTask = async () => await ListTask();
