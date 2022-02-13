const { client } = require('../connection');
const DB_NAME = 'To-do';
const DB_COLLECTION = 'users';

const userCollection = client.db(DB_NAME).collection(DB_COLLECTION);

const create = async ({ email, password, name }) => await userCollection.insertOne({ email, password, name });

const findByEmail = async (email) => await userCollection.findOne({ email });

module.exports = {
  create,
  findByEmail,
};
