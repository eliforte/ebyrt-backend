const { client } = require('../connection');
const { ObjectId } =  require('mongodb');

const DB_NAME = 'To-do';
const DB_COLLECTION = 'tasks';

const userCollection = client.db(DB_NAME).collection(DB_COLLECTION);

const create = async ({ text, userId, status, createAt }) => await userCollection.insertOne({ text, userId, status, createAt });

const listTask = async (userId) => await userCollection.find(userId).toArray();

const updateGame = async (id, status) => {
  const { value } = await userCollection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: { status } },
  { returnDocument: 'after', returnOriginal: false }
  );
  return value;
}

const removeGame = async (id) => await userCollection.deleteOne({ _id: ObjectId(id) });

module.exports = {
  create,
  listTask,
  updateGame,
  removeGame,
};
