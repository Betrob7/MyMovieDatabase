import { renderRandomTrailers } from "./modules/caroussel.js";
import { renderTopMovies } from "./modules/topMovies.js";
import { renderSearchedMovies } from "./modules/search.js";
import { searchListener, moreInfoListener } from "./modules/eventHandlers.js";
import { renderMovieInformation } from "./modules/movieInfo.js";


if(window.location.pathname === '/' || window.location.pathname.includes('index.html')) {
    console.log('index.html');
    renderRandomTrailers();
    renderTopMovies();
    searchListener();

} else if(window.location.pathname.includes('favorites.html')) {
    console.log('favorites.html');
    searchListener();

} else if(window.location.pathname.includes('movie.html')) {
    console.log('movie.html');
    searchListener();
    renderMovieInformation();

} else if(window.location.pathname.includes('search.html')) {
    console.log('search.html');
    renderSearchedMovies();
    searchListener();
    moreInfoListener();

}



