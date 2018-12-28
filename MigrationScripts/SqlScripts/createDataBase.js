const sql = require('promise-mysql');

async function createDatabase(name) {
  const connection = await sql.createConnection({
    host: 'localhost',
    user: 'tarunharsh',
    password: 'TarunHarsh@123',
  });

  await connection.query(`create database ${name}`);
  await connection.end();
}
createDatabase('testDB');
