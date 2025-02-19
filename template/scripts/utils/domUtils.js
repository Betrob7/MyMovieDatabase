function showErrorMessage(message) {
    let contentWrapper = document.querySelector('#carousselSection');
        let errorMessage = document.createElement('p')
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message-API')
        contentWrapper.prepend(errorMessage);
}

function showErrorMessageSearch(message) {
    let contentWrapper = document.querySelector('#searchResults');
        let errorMessage = document.createElement('p')
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message-API')
        contentWrapper.prepend(errorMessage);
}

function showErrorMessageMovieInfo(message) {
    let contentWrapper = document.querySelector('#movieInformation');
        let errorMessage = document.createElement('p')
        errorMessage.textContent = message;
        errorMessage.classList.add('error-message-API')
        contentWrapper.prepend(errorMessage);
}

function showTopMovies(movies) {
    let cardContainer = document.querySelector('#cardContainer');
    for(let movie of movies) {
    let movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');
        movieCard.dataset.imdbid = movie.imdbID;
        movieCard.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <a href="${movie.Trailer_link}" target="_blank">Trailer</a>`
        cardContainer.appendChild(movieCard);
    }
}

function displayMovies(movies) {
    let searchResults = document.querySelector('#searchResults');
        searchResults.textContent = '';
    
    for(let movie of movies) {
        let movieRef = document.createElement('article');
            movieRef.classList.add('movie-card');
            movieRef.dataset.imdbid = movie.imdbID;
            movieRef.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <h2>${movie.Title}</h2>
            <a href="${movie.Trailer_link}" target="_blank">Trailer</a>`
            searchResults.appendChild(movieRef);
    }
}

function displayMovieInformation(movie) {
        let movieInfo = document.querySelector('#movieInformation');
            movieInfo.classList.add('movie-information');
            movieInfo.innerHTML = `
            <img src="${movie.Poster}" alt="${movie.Title}">
            <div>
                <h2>${movie.Title}</h2>
                <p><strong>Year:</strong> ${movie.Year}</p>
                <p><strong>Genre:</strong> ${movie.Genre}</p>
                <p><strong>Director:</strong> ${movie.Director}</p>
                <p><strong>IMDB Rating:</strong> ${movie.imdbRating}</p>
                <a id="backButton" href="index.html">🔙 Back to Search</a>
            </div>
        `;
}

export {showErrorMessage, showTopMovies, displayMovies, showErrorMessageSearch, showErrorMessageMovieInfo, displayMovieInformation};


