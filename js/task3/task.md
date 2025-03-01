- Create a JS file and define inside it an array of object literals with the following structure, populating it with at least 10 elements - we’ll consider this our “database”.
```
{
  id: <number>
  title: <string>
  year: <number>,
  runtime: <number>,
  genres: <array of strings>,
  director: <string>
  actors: <array of strings>
  plot: <string>
  posterUrl: <string>
}
```
>Note You can use the list [here](https://github.com/erik-sytnyk/movies-list/blob/master/db.json) to quickly grab some data - make sure to put in the correct format.
- Create another JS file and in it:
  - Define a function that returns all the movies from a given year;
  - Define a function that returns all the movies of a given genre;
  - Define a function that returns the duration of all the movies in the database.
- Create another JS file that prints to the console the results of the functions defined above, making multiple calls with different years and genres as arguments.
- Create an HTML page and put everything together so that the results can be seen in the browser’s console.