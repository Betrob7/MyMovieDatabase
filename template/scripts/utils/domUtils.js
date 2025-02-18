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

function showTopMovies(movies) {
    let cardContainer = document.querySelector('#cardContainer');
    for(let movie of movies) {
    let movieCard = document.createElement('article');
        movieCard.classList.add('movie-card');
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
        movieRef.innerHTML = `
        <img src="${movie.Poster}" alt="${movie.Title}">
        <h2>${movie.Title}</h2>
        <a href="${movie.Trailer_link}" target="_blank">Trailer</a>`
        searchResults.appendChild(movieRef);
    }
}

export {showErrorMessage, showTopMovies, displayMovies, showErrorMessageSearch};


