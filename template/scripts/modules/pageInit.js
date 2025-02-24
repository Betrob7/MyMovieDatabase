import { renderRandomTrailers } from "../modules/caroussel.js";
import { renderTopMovies } from "../modules/topMovies.js";
import { renderSearchedMovies } from "../modules/search.js";
import { searchListener, moreInfoListener, topMoviesListener, moreFavouriteInfoListener, dropdownMenuListener, surpriseButtonListener, surpriseMovieListener } from "../modules/eventHandlers.js";
import { renderMovieInformation } from "../modules/movieInfo.js";
import { renderLikedMovies } from "../modules/favourites.js";
import { surpriseMovie } from "./surprise.js";


function initIndexPage() {
    renderRandomTrailers();
    renderTopMovies();
    searchListener();
    topMoviesListener();
    dropdownMenuListener();
}

function initFavoritesPage() {
    searchListener();
    renderLikedMovies();
    moreFavouriteInfoListener();
    dropdownMenuListener();
}

function initMoviePage() {
    searchListener();
    renderMovieInformation();
    dropdownMenuListener();
}

function initSearchPage() {
    renderSearchedMovies();
    searchListener();
    moreInfoListener();
    dropdownMenuListener();
}

function initSurprisePage() {
    surpriseButtonListener();
    surpriseMovie();
    surpriseMovieListener();
    searchListener();
    dropdownMenuListener();
}

export {initIndexPage, initFavoritesPage, initMoviePage, initSearchPage, initSurprisePage};