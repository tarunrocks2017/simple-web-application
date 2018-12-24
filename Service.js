const sqlfile = require('./SqlFiles/sqlfile');

const queries = require('./SqlFiles/sqlqueries');

async function getMovies() {
  const movieInfo = await sqlfile.fetchData('movies', 'moviename', 'image_url', 'movieid');
  return movieInfo;
}

async function getActors() {
  const ActorsInfo = await sqlfile.fetchData('actors', 'actorname', 'image_url', 'actorid');
  return ActorsInfo;
}

async function getMovieById(movieid) {
  const moviDetail = await sqlfile.fetchDataById(movieid, queries.SELECT_FROM_MOVIES);
  return moviDetail;
}

async function getActorById(actorid) {
  const ActorDetail = await sqlfile.fetchDataById(actorid, queries.SELECT_FROM_ACTORS);
  return ActorDetail;
}

module.exports = {
  getActors,
  getMovies,
  getMovieById,
  getActorById,
};
