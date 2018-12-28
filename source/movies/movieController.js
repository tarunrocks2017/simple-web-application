const con = require('../../MigrationScripts/SqlScripts/connection');

const API = require('./APIIntegreation');

const SELECT_FROM_MOVIES_BY_ID = `select ac.actorname ,ac.actorid , moviename , m.movieid , status , releaseYear
,m.image_url , m.description from movies m right join actors ac on ac.movieid = m.movieid where m.movieid = ?`;

const SELECT_FROM_MOVIES = 'select moviename , movieid , image_url from movies';

async function fetchMovieData() {
  try {
    const connection = await con.getConnection();
    const result = await connection.query(SELECT_FROM_MOVIES);
    await connection.end();
    return result;
  } catch (error) {
    return error;
  }
}

async function fetchMovieDataById(id) {
  try {
    const connection = await con.getConnection();
    const formatQuery = await connection.format(SELECT_FROM_MOVIES_BY_ID, [id]);
    const result = await connection.query(formatQuery);
    console.log(result[0].moviename);
    const rating = await API.getRating(result[0].moviename);
    return [result, await API.getRating(result[0].moviename)];
  } catch (error) {
    return error;
  }
}

module.exports = {
  fetchMovieData,
  fetchMovieDataById,
};
