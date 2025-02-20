import { displayTopMovies } from "../utils/domUtils.js";
import { fetchTopMovies } from "./api.js";

// trycker ut klassernas toppfilmer på skärmen
async function renderTopMovies() {
    const movies = await fetchTopMovies(); //kör funktionen som anropar Jespers API med klassens toppfilmer och sparar ner det i variabeln movies
    displayTopMovies(movies); // skickar in movies som argument när jag kör funktionen som trycker ut allt på skärmen
    
}
export {renderTopMovies};