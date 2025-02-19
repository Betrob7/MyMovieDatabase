import { fetchMovieInformation } from "./api.js";
import { displayLikedMovie } from "../utils/domUtils.js";

async function renderLikedMovies() {
    let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];

    if (likedMovies.length === 0) {
        document.querySelector("#favoritesContainer").innerHTML = "<p>😔 Inga filmer gillade ännu.</p>";
        return;
    }

    for (let imdbID of likedMovies) {
        const movie = await fetchMovieInformation(imdbID);
        displayLikedMovie(movie);
    }
    
}

export {renderLikedMovies};