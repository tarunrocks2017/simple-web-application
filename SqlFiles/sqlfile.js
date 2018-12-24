const con = require('./connection');

async function fetchData(tablename, column1, column2, column3) {
  const connection = await con.getConnection();
  const result = await connection.query(`select ${column1} , ${column2}, ${column3} from ${tablename} `);
  await connection.end();
  return result;
}

async function fetchDataById(id, sqlQuery) {
  const connection = await con.getConnection();
  const formatQuery = await connection.format(sqlQuery, [id]);
  const result = await connection.query(formatQuery);
  await connection.end();
  return result;
}

module.exports = {
  fetchData,
  fetchDataById,
};
