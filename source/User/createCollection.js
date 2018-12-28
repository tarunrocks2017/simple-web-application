const mongoose = require('mongoose');

const connection = require('../../MigrationScripts/mongoScripts/connectDB');

connection.getMongoConnection();

const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  username: String,
  email: {
    type: String,
    unique: true,
  },
  userpassword: String,
});

const UserData = mongoose.model('UserData', userDataSchema);
module.exports = {
  UserData,
};
