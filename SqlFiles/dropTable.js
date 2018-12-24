const mysql = require('promise-mysql');

async function dropTable(tablename) {
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'tarunharsh',
    password: 'TarunHarsh@123',
    database: 'tarunDB',
  });

  await connection.query(`drop table ${tablename}`);
  await connection.end();
}
dropTable('movies');
