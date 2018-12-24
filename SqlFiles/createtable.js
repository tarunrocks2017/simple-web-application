const sql = require('./connection');

const sqlQuery = require('./sqlqueries');

async function createTable(query) {
  const connection = sql.getConnection();
  await connection.query(query);
  await connection.end();
}
createTable(sqlQuery.CREATE_TABLE_ACTORS);
// createTable(sqlQuery.CREATE_TABLE_MOVIES);
// module.exports = {
//   createTable,
// };
