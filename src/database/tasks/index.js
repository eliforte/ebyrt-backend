const { ObjectId } = require('mongodb');
const { client } = require('../connection');

const DB_NAME = 'To-do';
const DB_COLLECTION = 'tasks';

const userCollection = client.db(DB_NAME).collection(DB_COLLECTION);

module.exports.Create = async ({
  text, userId, status, createAt,
}) => userCollection.insertOne({
  text, userId, status, createAt,
});
module.exports.ListTask = async (_id) => userCollection.find({ userId: _id }).toArray();
module.exports.RemoveTask = async (id) => userCollection.deleteOne({ _id: ObjectId(id) });
module.exports.UpdateTask = async (id, infoTask) => {
  const { value } = await userCollection.findOneAndUpdate(
    { _id: ObjectId(id) },
    { $set: infoTask },
    { returnDocument: 'after', returnOriginal: false },
  );

  return value;
};
module.exports.FindById = async (id) => userCollection.findOne(ObjectId(id));
