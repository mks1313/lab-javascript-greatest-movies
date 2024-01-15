// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const item = moviesArray.map((item) => {
        return item.director;
  })
        return item;
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    if (!moviesArray) {
        return 0;
    }
    const StevDramaMov = moviesArray.filter(movies => {
        return (
            movies.director === 'Steven Spielberg' &&
            movies.genre.includes('Drama')
    );
    });

    return StevDramaMov.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(array) {
    if(!array.length) {
        return 0;
    }
    let movieScores = array
        .map(movie => (typeof movie.score === 'number' ? movie.score : 0));

    let totalScore = movieScores.reduce((acc, element) => acc + element, 0);

    return Number((totalScore / array.length).toFixed(2));
}   

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
    const dramaMovies = array.filter(movie => movie.genre.includes("Drama"));
    return scoresAverage(dramaMovies);
}
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(array) {
  const byYear = array.filter(movie => movie.year);
  return byYear.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    }
    return a.title.localeCompare(b.title);
  });
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = moviesArray.map(item => item.title.toString());
    const sortedTitles = titles.sort((a, b) => a.localeCompare(b));
    return sortedTitles.slice(0, 20);      
}

f// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map(movie => {
        const durationParts = movie.duration.split(' ');
        let totalMinutes = 0;
        for (const part of durationParts) {
          if (part.includes('h')) {
            totalMinutes += parseInt(part) * 60;
          } else if (part.includes('min')) {
            totalMinutes += parseInt(part);
          }
        }
        return { ...movie, duration: totalMinutes };
      });
}


// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const years = [...new Set(moviesArray.map(movie => movie.year))];
  
  let bestYear = years[0];
  let bestAverage = -1;

  for (const year of years) {
      const yearMovies = moviesArray.filter(movie => movie.year === year);
      const average = scoresAverage(yearMovies);

      if (average > bestAverage || (average === bestAverage && year < bestYear)) {
          bestYear = year;
          bestAverage = average;
      }
  }
  return `The best year was ${bestYear} with an average score of ${bestAverage}`;
}

 
  
  
  
  
  
  
  
