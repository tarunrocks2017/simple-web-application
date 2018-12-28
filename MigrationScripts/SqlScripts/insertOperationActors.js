
const connect = require('./connection');

const ActorInformation = [
  {
    id: 1,
    name: 'Robert Downey',
    totalMovies: 350,
    image: '/robert.jpg',
    activeYear: '2007-2018',
    movieid: 1,
    Awards: ['Academy Award for Best Actor', 'best avenger award'],
    description: 'Robert John Downey Jr. (born April 4, 1965)[2] is an American actor and singer. His career has included critical and '
        + 'popular success in his youth, followed by a period of substance abuse and legal difficulties, and a resurgence of commercial success in middle age ',
  },
  // {
  //   id: 2,
  //   name: 'Hritik Roshan',
  //   totalMovies: 300,
  //   image: '/hritik-01.jpg',
  //   activeYear: '2000-2015',
  //   movieid: 1,
  //   Awards: ['Award for Best Indian Actor', 'best avenger award'],
  //   description: 'Hrithik Roshan is an Indian actor who appears in Bollywood films. He has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards'
  //       + ', including six Filmfares, four for Best Actor and one each for Best Debut and Best Actor',

  // },
  // {
  //   id: 3,
  //   name: 'Priyanka chopra',
  //   totalMovies: 200,
  //   image: '/priyanka.jpg',
  //   activeYear: '2000-2018',
  //   movieid: 3,
  //   Awards: ['Award for Best Indian Actoress', 'best look award'],
  //   description: 'priyanka chopra is an Indian actoress who appears in Bollywood films. she has portrayed a variety of characters and is known for his dancing skills. One of the highest-paid actors in India, he has won many awards'
  //       + ', including six Filmfares, four for Best Actor and one each for Best Debut and Best Actor',

  // },
  // {
  //   id: 4,
  //   name: 'kangana ranaut',
  //   totalMovies: 350,
  //   image: '/kangana.jpg',
  //   activeYear: '2007-2018',
  //   movieid: 3,
  //   Awards: ['Academy Award for Best Actor', 'best avenger award'],
  //   description: 'Robert John Downey Jr. (born April 4, 1965)[2] is an American actor and singer. His career has included critical and '
  //       + 'popular success in his youth, followed by a period of substance abuse and legal difficulties, and a resurgence of commercial success in middle age ',

  // },


];


async function insertDataInActors(arr) {
  const connection = await connect.getConnection();
  arr.forEach((element) => {
    connection.query(`insert into actors values ( ${element.id},'${element.name}',${element.totalMovies},'${element.activeYear}'
    ,${element.movieid},'${element.Awards.join()}','${element.image}','${element.description}')`);
  });

  await connection.end();
}
insertDataInActors(ActorInformation);
