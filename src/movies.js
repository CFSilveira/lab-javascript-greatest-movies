const movies = require('./data.js');

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesList) {
  const directorsArray = moviesList.map((film) => {
    return film.director;
  })
  return directorsArray;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesList) {
  const dramaMovies = moviesList.filter((tipo) => {
    return tipo.director === 'Steven Spielberg' && tipo.genre.includes('Drama');
      });
  return dramaMovies.length;

}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movieList) {
  if (!movieList.length) {return 0}
  const scoreMovies =  movieList.reduce((accumulator, currentValue) => {
    //"currentValue.score === Number" was added in an atempt to only count the movie if it has a score
    return currentValue.score === Number, accumulator + currentValue.score},0);
    
    return Math.round((scoreMovies/movieList.length) * 100) /100;

}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movieList) {
  const movieGenre = movieList.filter((tipo) => {
    return tipo.genre.includes('Drama');
  });
  
  if (movieGenre.length == 0) {return 0}
  const scoreDrama = movieGenre.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.score},0);

    return Math.round((scoreDrama/movieGenre.length) * 100) / 100;
  }


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movieList) {
  const newArray = [...movieList];
  newArray.sort(function (a, b) {
    //this next line took me almost 2 hours
    return a.year - b.year || a.title.localeCompare(b.title);
  });

  return newArray;

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movieList) {
  const titleArray = [...movieList];
  const sortedArray = [];
  
  titleArray.sort((a, b) => a.title.localeCompare(b.title))
  for (let i = 0; i < 20; i++) {
    sortedArray.push(`${titleArray[i].title}`)

  }
  
  return sortedArray;
}

console.log(orderAlphabetically(movies))


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
