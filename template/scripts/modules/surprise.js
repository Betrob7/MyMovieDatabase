import { fetchTopMovies } from "./api.js"
import { displaySurpriseMovie   } from "../utils/domUtils.js";
//slumpar fram ett filmförslag bland klassens filmer
async function surpriseMovie() {
    let movies = await fetchTopMovies();
    let randomMovie = movies[Math.floor(Math.random() * movies.length)];
    displaySurpriseMovie(randomMovie);
}

export {surpriseMovie};