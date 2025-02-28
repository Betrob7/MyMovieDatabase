import { getRandomTopMovies } from "../components/shuffle.js";
import { displayTopMovies } from "../utils/domUtils.js";

// trycker ut klassernas toppfilmer slumpade på skärmen
async function renderTopMovies() {
  const movies = await getRandomTopMovies();
  displayTopMovies(movies);
}
export { renderTopMovies };
