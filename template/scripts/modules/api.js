import { showErrorMessage } from "../utils/domUtils.js";
//hämtar klassernas filmer från Jespers API
export async function fetchTopMovies() {
    try {let response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json'); 
        if(!response.ok) { //try/catch för felhantering, kastar ett fel om responsen inte är ok och skickar med .status
            throw new Error(`Something went wrong! Status: ${response.status}`); 
        }
        let movies = await response.json(); 
        console.log(movies);
        

        if(!Array.isArray(movies)) { //kollar att formatet är en array
            throw new Error('Wrong format, format is not an array')
        }
        return movies;
        
    } catch (error) {
        console.log(error.message);
        showErrorMessage('Oh no! Something went wrong, please refresh the page');
        return []; //returnerar en tom array vid fel för att inte krascha programmet
    }
}
//hämtar filmer från OMDB-API, tar emot ett query-argument(s=filmtitel)
async function fetchOmdbMovies(query) {
    try {let response = await fetch(`http://www.omdbapi.com/?apikey=a1dc276d&s=${query}`);
        if(!response.ok) {
            throw new Error(`Something went wrong! Status: ${response.status}`);
        }
        let movies = await response.json();
        console.log(movies);

        if (movies.Response === "False" || !movies.Search) { //vid sökning hämtas ett objekt som i sin tur innehåller en egenskap(Search) som innehåller en array.
            //.Response är en egenskap som returnerar strängen 'True'/'False', .Search är egenskapen som innehåller arrayen med film/filmer som matchar sökningen. 
            return []; //ifall sökningen misslyckas returneras en tom array
        }

        return movies.Search; //returnerar arrayen som hämtas om sökningen matchas

    } catch (error) {
        console.log(error.message);
        return [];
        
    }
}
//hämtar mer info om filmerna från OMDB-API, tar emot ett query-argument(i=imdbID)
async function fetchMovieInformation(query) {
    try {let response = await fetch(`http://www.omdbapi.com/?apikey=a1dc276d&plot=full&i=${query}`);
        if(!response.ok) {
            throw new Error(`Something went wrong! Status: ${response.status}`);
        }
        let movieInfo = await response.json();
        console.log(movieInfo);

        return movieInfo;
        
        
    } catch (error) {
        console.log(error.message);
        return {};
        
    }
}
export {fetchOmdbMovies, fetchMovieInformation};

