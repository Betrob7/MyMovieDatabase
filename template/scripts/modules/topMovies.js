import { showTopMovies } from "../utils/domUtils.js";
import { fetchTopMovies } from "./api.js";


async function renderTopMovies() {
    const movies = await fetchTopMovies();
    showTopMovies(movies);
    
}
export {renderTopMovies};