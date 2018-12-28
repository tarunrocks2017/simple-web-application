const sql = require('promise-mysql');

async function getConnection() {
  const connection = await sql.createConnection({
    host: 'localhost',
    user: 'tarunharsh',
    password: 'TarunHarsh@123',
    database: process.env.DB_NAME || 'tarunDB',
  });
  return connection;
}

module.exports = {
  getConnection,
};
