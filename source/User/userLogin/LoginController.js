const bcrypt = require('bcrypt');

const connection = require('../../../MigrationScripts/mongoScripts/connectDB');

const collection = require('../../../source/User/createCollection');


async function UserExist(email, password) {
  try {
    connection.getMongoConnection();
    let exist = false;
    const userObj = await collection.UserData.find({ email });
    if (userObj.length === 0) {
      return exist;
    }
    exist = await bcrypt.compare(password, userObj[0].userpassword);
    return exist;
  } catch (error) {
    return error;
  }
}

module.exports = {
  UserExist,
};
