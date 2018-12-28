const sql = require('./connection');

const CREATE_TABLE_MOVIES = `create table movies ( movieid int not null auto_increment ,
  moviename varchar(50), releaseYear int ,status varchar(50),image_url varchar(50),description varchar(500)
  , primary key(movieid))`;

const CREATE_TABLE_ACTORS = `create table actors ( actorid int not null auto_increment ,
  actorname varchar(50),totalmovies int, activeyear varchar(20) , movieid int not null,
  awards varchar(300), image_url varchar(300),description varchar(500),primary key(actorid), foreign key (movieid)
   references movies(movieid))`;


async function createTable(query) {
  const connection = await sql.getConnection();
  await connection.query(query);
  await connection.end();
}
createTable(CREATE_TABLE_ACTORS);
// createTable(CREATE_TABLE_MOVIES);
