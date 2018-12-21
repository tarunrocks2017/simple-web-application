const sqlfile = require('./SqlFiles/sqlfile');

function getObjectData(id, dataArray) {
  let dataObject;
  let b = false;
  dataArray.forEach((element) => {
    // eslint-disable-next-line radix
    if (element.id === id) {
      dataObject = element;
      b = true;
    }
  });
  if (b === false) {
    dataObject = 0;
  }
  return dataObject;
}

function getMovies() {
  const movieInfo = [];
  const temp = sqlfile.fetchData('movies');

  temp.forEach((element) => {
    const tempobject = {};
    tempobject.id = element.id;
    tempobject.name = element.name;
    tempobject.releaseYear = element.releaseyear;

    movieInfo.push(tempobject);
  });

  return movieInfo;
}


module.exports = {
  getObjectData,
  getMovies,
  getActors,
};
