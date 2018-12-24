const CREATE_TABLE_MOVIES = `create table movies ( movieid int not null auto_increment ,
    moviename varchar(50), releaseYear int ,status varchar(50),image_url varchar(50),description varchar(500)
    , primary key(movieid))`;

const CREATE_TABLE_ACTORS = `create table actors ( actorid int not null auto_increment ,
    actorname varchar(50),totalmovies int, activeyear varchar(20) , movieid int not null,
    awards varchar(300), image_url varchar(300),description varchar(500),primary key(actorid), foreign key (movieid)
     references movies(movieid))`;

const SELECT_FROM_MOVIES = `select ac.actorname ,ac.actorid , moviename , m.movieid , status , releaseYear
,m.image_url , m.description from movies m right join actors ac on ac.movieid = m.movieid where m.movieid = ?`;

const SELECT_FROM_ACTORS = `select m.moviename , m.movieid , actorname , activeyear , totalmovies, ac.image_url,
ac.description,awards from actors ac inner join movies m on m.movieid = ac.movieid where actorid = ?`;

module.exports = {
  CREATE_TABLE_MOVIES,
  CREATE_TABLE_ACTORS,
  SELECT_FROM_MOVIES,
  SELECT_FROM_ACTORS,
};
