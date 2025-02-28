import { showErrorMessageMovieInfo } from "../utils/domUtils.js";
import { fetchMovieInformation } from "./api.js";
import { displayMovieInformation } from "../utils/domUtils.js";
import { backButtonListener } from "./eventHandlers.js";

async function renderMovieInformation() {
  const selectedMovie = localStorage.getItem("selectedMovie"); //hämtar den valda filmens imdbID från localStorage som tidigare sparats vid klick
  if (!selectedMovie) {
    // om inget imdbID hittas så trycks ett felmeddelande ut och funktionen avslutas
    showErrorMessageMovieInfo("Sorry, couldnt find this movie!");
    return;
  }

  const movie = await fetchMovieInformation(selectedMovie); // sparar ner svaret från API-anropet(info om film) som görs med den valda filmens imdbID som query

  if (!movie || movie.length === 0) {
    //om filmen inte finns så trycks ett felmeddelande ut och funktionen avslutas
    showErrorMessageMovieInfo(
      "Sorry, couldnt display any info about this movie!"
    );
    return;
  }

  displayMovieInformation(movie); //kör displayMovieInformation() med den valda filmen för att trycka ut infon på skärmen
  backButtonListener();
}
export { renderMovieInformation };
