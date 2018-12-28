const bcrypt = require('bcrypt');

const connection = require('../../../MigrationScripts/mongoScripts/connectDB');

const collection = require('../../../source/User/createCollection');

const saltround = 10;

async function doHash(password) {
  try {
    const salt = await bcrypt.genSalt(saltround);
    const hash = await bcrypt.hash(password, salt);
    return hash;
  } catch (err) {
    return 'password not hashed';
  }
}

async function enterData(data) {
  try {
    connection.getMongoConnection();
    const userData = new collection.UserData(data);
    await userData.save();
    const user = await collection.UserData.find({ email: data.email });
    return user;
  } catch (err) {
    return 'duplicate user';
  }
}

module.exports = {
  doHash,
  enterData,
};
