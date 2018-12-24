const sql = require('promise-mysql');

const sqlqueries = require('./sqlqueries');

async function alterTable(query) {
  const connection = await sql.createConnection({
    host: 'localhost',
    user: 'tarunharsh',
    password: 'TarunHarsh@123',
    database: 'tarunDB',
  });

  await connection.query(query);
  await connection.end();
}
alterTable(sqlqueries.ALTER_TABLE_MOVIES);
