import { showErrorMessage } from "../utils/domUtils.js";

export async function fetchTopMovies() {
    try {let response = await fetch('https://santosnr6.github.io/Data/favoritemovies.json');
        if(!response.ok) {
            throw new Error(`Something went wrong! Status: ${response.status}`); 
        }
        let movies = await response.json();

        if(!Array.isArray(movies)) {
            throw new Error('Wrong format, format is not an array!')
        }
        
        return movies;
        
    } catch (error) {
        console.log(error.message);
        showErrorMessage();
        return [];
    }
}

