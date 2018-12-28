const connect = require('./connection');

const movieInfo = [
  {
    id: 1,
    name: 'IronMan',
    release: 2009,
    status: 'superhit',
    image: '/iron-man.jpg',
    description: 'Iron Man is a 2008 American superhero film based on the Marvel Comics'
      + 'character of the same name, produced by Marvel Studios and distributed by Paramount',

  },
  // {
  //   id: 2,
  //   name: 'Avengers',
  //   release: 2010,
  //   status: 'superhit',
  //   image: '/avengers.jpg',
  //   description: 'this movie is great its story is good. good to see this movie',

  // },
  // {
  //   id: 3,
  //   name: 'IronMan',
  //   release: 2009,
  //   status: 'superhit',
  //   image: '/expandable.jpg',
  //   description: `Iron Man is a 2008 American superhero film based on the Marvel Comics character of the 
  //   same name, produced by Marvel Studios and distributed by Paramount Pictures.[N 1] It is the first film 
  //   in the Marvel Cinematic Universe (MCU). The film was directed by Jon Favreau, with a screenplay by the`,

  // },
  // {
  //   id: 4,
  //   name: 'Krish',
  //   release: 2009,
  //   status: 'superhit',
  //   image: '/krish.jpg',
  //   description: 'this movie is great its story is good. good to see this movie',

  // },
  // {
  //   id: 5,
  //   name: 'Titanic',
  //   release: 2006,
  //   status: 'superhit',
  //   image: '/avengers.jpg',
  //   description: 'this movie is great its story is good. good to see this movie',

  // },


];

async function insertDataInMovies(arr) {
  const connection = await connect.getConnection();
  arr.forEach((element) => {
    connection.query(`insert into movies values ( ${element.id},'${element.name}','${element.release}'
    ,'${element.status}','${element.image}','${element.description}')`);
  });

  await connection.end();
}
insertDataInMovies(movieInfo);
