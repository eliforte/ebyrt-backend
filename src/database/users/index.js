const { client } = require('../connection');
const DB_NAME = 'To-do';
const DB_COLLECTION = 'users';

const userCollection = client.db(DB_NAME).collection(DB_COLLECTION);

module.exports.Create = async ({ email, password, name }) => await userCollection.insertOne({ email, password, name });
module.exports.FindByEmail = async (email) => await userCollection.findOne({ email });
