import { fetchOmdbMovies } from "./api.js";
import { showErrorMessage } from "../utils/domUtils.js";
import { displayMovies } from "../utils/domUtils.js";

async function renderSearchedMovies() {
    const userInput = localStorage.getItem('userSearch');
        if(!userInput) {
            showErrorMessage('Movie not found!');
            return;
        }

        const movies = await fetchOmdbMovies(userInput);

        displayMovies(movies);

}
export {renderSearchedMovies};