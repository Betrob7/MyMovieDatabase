import { likeButtonListener, trailerListener, dropdownMenuListener, dropdownMenuMovieListener } from "../modules/eventHandlers.js";
import { fetchMovieInformation, fetchOmdbMovies } from "../modules/api.js";



// felmeddelande som används ifall karusellen inte laddas
function showErrorMessage(message) {
    const contentWrapper = document.querySelector('#carousselSection');
        let errorMessage = document.createElement('p')
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message-API')
        contentWrapper.prepend(errorMessage);
}
// felmeddelande som används vid fel med sökresultat
function showErrorMessageSearch(message) {
    const contentWrapper = document.querySelector('#searchResults');
        let errorMessage = document.createElement('p')
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message-API')
        contentWrapper.prepend(errorMessage);
}
// felmeddelande som används vid fel med utökad filminfo
function showErrorMessageMovieInfo(message) {
    const contentWrapper = document.querySelector('#movieInformation');
        let errorMessage = document.createElement('p')
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message-API')
        contentWrapper.prepend(errorMessage);
}
// används för att trycka ut klassernas toppfilmer på första sidan
async function displayTopMovies(movies) {
    const cardContainer = document.querySelector('#cardContainer'); 

    const favorites = JSON.parse(localStorage.getItem('likedMovies')) || []; // hämtar arrayen med imdbID från gillade filmer i localStorage

    for(let movie of movies) { // for of loop för att göra filmkorten samt trycka ut dom på skärmen
    let movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');
        movieCard.dataset.imdbid = movie.imdbID; // lägger till dataid som blir detsamma som imdbID
        const movieInfo = await fetchMovieInformation(movie.imdbID);

        const isLiked = favorites.includes(movie.imdbID) ? 'liked' : ''; // använder en ternär operator(kortform av if/else) för att kontrollera om en film är gillad för att sen returnera en sträng baserat på resultatet
        // om det är sant att favorites.includes(movie.imdbID) då sparas 'liked' ner i isLiked, annars retuneras en tom sträng ''.
        movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <p>⭐ Imdb rating: ${movieInfo.imdbRating ? movieInfo.imdbRating : ''}</p>
        <a href="${movie.Trailer_link}" target="_blank">Trailer</a> 
        <button class="like-btn ${isLiked}">${isLiked ? "❤️" : "🤍"}</button>` // här lägger jag till isLiked som klass, som antingen är liked eller '', för att sen återigen använda ternär operator, ${isLiked} är condition, följt av ? sen vid true visas symbolen för gillad film, : vid false visas symbolen för ickegillad film.
        cardContainer.appendChild(movieCard);
    } 
    likeButtonListener();
    trailerListener();
}
// återanvänder funktionen från ovan för att visa filmer vid sökning
async function displayMovies(movies) {
    let searchResults = document.querySelector('#searchResults');
        searchResults.textContent = ''; //nollställer sökresultatet

        const favorites = JSON.parse(localStorage.getItem('likedMovies')) || [];
    
    for(let movie of movies) {
        const movieInfo = await fetchMovieInformation(movie.imdbID);
        let movieRef = document.createElement('article');
            movieRef.classList.add('movie-card', 'movie-card__searched');
            movieRef.dataset.imdbid = movie.imdbID;

            const isLiked = favorites.includes(movie.imdbID) ? 'liked' : '';

            movieRef.innerHTML = `
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : './res/icons/missing-poster.svg'}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <p>⭐ Imdb rating: ${movieInfo.imdbRating ? movieInfo.imdbRating : ''}</p>
            <button class="like-btn ${isLiked}">${isLiked ? "❤️" : "🤍"}</button>`
            searchResults.appendChild(movieRef);
    }
    likeButtonListener();
    trailerListener();
}
// används för att visa "mer info" om en film
function displayMovieInformation(movie) {
        let movieInfo = document.querySelector('#movieInformation');
            movieInfo.classList.add('movie-information');
            movieInfo.innerHTML = `
            <a id="backButton" title="Go back">
            <i class="fas fa-undo-alt"></i>
            </a>
            <img src="${movie.Poster !== 'N/A' ? movie.Poster : './res/icons/missing-poster.svg'}" alt="${movie.Title}">
            <div>
                <h2>${movie.Title}</h2>
                <p><strong>Year:</strong> ${movie.Year}</p>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
                <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
                <p><strong>Writer:</strong> ${movie.Writer}</p>
                <p><strong>Actors:</strong> ${movie.Actors}</p>
                <p><strong>Plot:</strong> ${movie.Plot}</p>
            </div>
        `;
}
// används för att visa filmer som gillats på favoritsidan
async function displayLikedMovie(movie) {
    const container = document.querySelector('#favoritesContainer');
    const favorites = JSON.parse(localStorage.getItem('likedMovies')) || [];
    const movieInfo = await fetchMovieInformation(movie.imdbID);

    let movieCard = document.createElement("article");
    movieCard.classList.add('movie-card', 'movie-card__favorite');
    movieCard.dataset.imdbid = movie.imdbID;
    const isLiked = favorites.includes(movie.imdbID) ? 'liked' : '';

    movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <p>⭐ Imdb rating: ${movieInfo.imdbRating ? movieInfo.imdbRating : ''}</p>
        <button class="like-btn ${isLiked}">${isLiked ? "❤️" : "🤍"}</button>
    `;
    container.appendChild(movieCard);
}


async function displaySurpriseMovie(movie) {
    let container = document.querySelector('#surprisedResults');
        container.innerHTML = '';
    

    const favorites = JSON.parse(localStorage.getItem('likedMovies')) || [];
    let movieCard = document.createElement('article');
        movieCard.classList.add('movie-card', 'movie-card__favorite');
        movieCard.dataset.imdbid = movie.imdbID;
    const isLiked = favorites.includes(movie.imdbID) ? 'liked' : '';
    const movieInfo = await fetchMovieInformation(movie.imdbID);

    movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <p>⭐ Imdb rating: ${movieInfo.imdbRating ? movieInfo.imdbRating : ''}</p>
        <a href="${movie.Trailer_link}" target="_blank">Trailer</a> 
        <button class="like-btn ${isLiked}">${isLiked ? "❤️" : "🤍"}</button>
    `;
    container.appendChild(movieCard);
    likeButtonListener();
    trailerListener();
}

async function displayDropdownMenu(searchText) {
    const searchInput = document.querySelector('#searchInput');
    const dropdown = document.querySelector('#dropdown');       
    const movies = await fetchOmdbMovies(searchText);
    dropdown.innerHTML = ''; 
    if(searchText.length < 3) {
        dropdown.style.display = 'none';
        return;
    }

    if(searchText.length > 5 && movies.length === 0) {
         dropdown.style.display = 'block';
         dropdown.classList.add('dropdown-list__error-msg');
         dropdown.innerHTML = `<p>Sorry, no movies found!</p>`;
         return;
     }

    for(let movie of movies) {
        const movieList = document.createElement("li");
        movieList.innerHTML = `
          <img src="${movie.Poster !== "N/A" ? movie.Poster : "./res/icons/missing-poster.svg"}" alt="${movie.Title}">
          <div class="movie-info">
            <p class="movie-title">${movie.Title}</p>
            <p class="movie-year">${movie.Year}</p>
          </div>
        `;
        dropdown.appendChild(movieList);
        dropdownMenuMovieListener(movieList);
    }
        dropdown.style.display = 'block';
}

export {showErrorMessage, displayTopMovies, displayMovies, showErrorMessageSearch, showErrorMessageMovieInfo, displayMovieInformation, displayLikedMovie, displaySurpriseMovie, displayDropdownMenu};


