import { showErrorMessageMovieInfo } from "../utils/domUtils.js";
import { fetchMovieInformation } from "./api.js";
import { displayMovieInformation } from "../utils/domUtils.js";

async function renderMovieInformation() {
    const selectedMovie = localStorage.getItem('selectedMovie');
        if(!selectedMovie) {
            showErrorMessageMovieInfo('Sorry, couldnt find this movie!');
            return;
        }

        const movie = await fetchMovieInformation(selectedMovie);

        if (!movie || movie.length === 0) {
            showErrorMessageMovieInfo('Sorry, couldnt display any info about this movie!');
            return;
        }

        displayMovieInformation(movie);

}
export {renderMovieInformation};