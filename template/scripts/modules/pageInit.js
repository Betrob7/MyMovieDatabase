import { renderRandomTrailers } from "../modules/caroussel.js";
import { renderTopMovies } from "../modules/topMovies.js";
import { renderSearchedMovies } from "../modules/search.js";
import { searchListener, moreInfoListener, topMoviesListener, moreFavouriteInfoListener, dropdownMenuListener } from "../modules/eventHandlers.js";
import { renderMovieInformation } from "../modules/movieInfo.js";
import { renderLikedMovies } from "../modules/favourites.js";


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

export {initIndexPage, initFavoritesPage, initMoviePage, initSearchPage};