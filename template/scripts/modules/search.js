import { fetchOmdbMovies } from "./api.js";
import { showErrorMessageSearch } from "../utils/domUtils.js";
import { displayMovies } from "../utils/domUtils.js";

async function renderSearchedMovies() {
  const userInput = localStorage.getItem("userSearch"); //hämtar värdet i nyckeln 'userSearch' från localStorage
  if (!userInput) {
    //kollar ifall det gjorts någon sökning
    showErrorMessageSearch("Please enter a movie title!");
    return;
  }

  const movies = await fetchOmdbMovies(userInput); //skickar in användarens sökning som query i OMDB-API och sparar ner resultatet i movies

  if (!movies || movies.length === 0) {
    //kollar ifall det returnerats någon film/filmer
    showErrorMessageSearch("No movies found. Try another search.");
    return;
  }

  displayMovies(movies); //trycker ut sökresultatet på skärmen
}
export { renderSearchedMovies };
