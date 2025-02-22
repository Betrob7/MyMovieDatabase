import { getRandomTopMovies } from "../components/shuffle.js";
import { displayTopMovies } from "../utils/domUtils.js";


// trycker ut klassernas toppfilmer på skärmen
async function renderTopMovies() {
    const movies = await getRandomTopMovies(); 
    displayTopMovies(movies); // skickar in movies som argument när jag kör funktionen som trycker ut allt på skärmen
    
}
export {renderTopMovies};