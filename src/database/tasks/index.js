const { client } = require('../connection');
const { ObjectId } =  require('mongodb');

const DB_NAME = 'To-do';
const DB_COLLECTION = 'tasks';

const userCollection = client.db(DB_NAME).collection(DB_COLLECTION);

module.exports.Create = async ({ text, userId, status, createAt }) => await userCollection.insertOne({ text, userId, status, createAt });
module.exports.ListTask = async (userId) => await userCollection.find(userId).toArray();
module.exports.RemoveTask = async (id) => await userCollection.deleteOne({ _id: ObjectId(id) });
