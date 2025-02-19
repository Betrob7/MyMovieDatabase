import { fetchOmdbMovies } from "./api.js";
import { showErrorMessageSearch } from "../utils/domUtils.js";
import { displayMovies } from "../utils/domUtils.js";

async function renderSearchedMovies() {
    const userInput = localStorage.getItem('userSearch');
        if(!userInput) {
            showErrorMessageSearch('Please enter a movie title!');
            return;
        }

        const movies = await fetchOmdbMovies(userInput);

        if (!movies || movies.length === 0) {
            showErrorMessageSearch("No movies found. Try another search.");
            return;
        }

        displayMovies(movies);

}
export {renderSearchedMovies};