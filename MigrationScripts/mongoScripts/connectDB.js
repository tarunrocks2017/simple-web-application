const mongoose = require('mongoose');

async function getMongoConnection() {
  const dbName = process.env.MONGO_DB || 'tarunMongoDB';
  mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
    useNewUrlParser: true,
    useCreateIndex: true,
  });
}
module.exports = {
  getMongoConnection,
};
