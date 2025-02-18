import { showErrorMessage } from "../utils/domUtils.js";

export async function fetchTopMovies() {
    try {let response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        if(!response.ok) {
            throw new Error(`Something went wrong! Status: ${response.status}`); 
        }
        let movies = await response.json();
        console.log(movies);
        

        if(!Array.isArray(movies)) {
            throw new Error('Wrong format, format is not an array')
        }
        return movies;
        
    } catch (error) {
        console.log(error.message);
        showErrorMessage('Oh no! Something went wrong, please refresh the page');
        return [];
    }
}

async function fetchOmdbMovies(query) {
    try {let response = await fetch(`http://www.omdbapi.com/?apikey=a1dc276d&s=${query}`);
        if(!response.ok) {
            throw new Error(`Something went wrong! Status: ${response.status}`);
        }
        let movies =await response.json();
        console.log(movies);

        if (movies.Response === "False" || !movies.Search) {
            return [];
        }

        return movies.Search;

    } catch (error) {
        console.log(error.message);
        return [];
        
    }
}
export {fetchOmdbMovies};

