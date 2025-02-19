import { renderRandomTrailers } from "../modules/caroussel.js";
import { renderTopMovies } from "../modules/topMovies.js";
import { renderSearchedMovies } from "../modules/search.js";
import { searchListener, moreInfoListener, topMoviesListener, moreFavouriteInfoListener } from "../modules/eventHandlers.js";
import { renderMovieInformation } from "../modules/movieInfo.js";
import { renderLikedMovies } from "../modules/favourites.js";

function initIndexPage() {
    renderRandomTrailers();
    renderTopMovies();
    searchListener();
    topMoviesListener();
}

function initFavoritesPage() {
    searchListener();
    renderLikedMovies();
    moreFavouriteInfoListener();
}

function initMoviePage() {
    searchListener();
    renderMovieInformation();
}

function initSearchPage() {
    renderSearchedMovies();
    searchListener();
    moreInfoListener();
}

export {initIndexPage, initFavoritesPage, initMoviePage, initSearchPage};