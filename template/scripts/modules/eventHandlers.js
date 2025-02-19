import { toggleLike } from "../components/toggle.js";
//lyssnare för sökrutan
function searchListener() {
    console.log('searchListener()');
    
document.querySelector('#searchForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let searchInput = document.querySelector('#searchInput');
    let userInput = document.querySelector('#searchInput').value.toLowerCase();
        localStorage.setItem('userSearch', userInput);
        searchInput.value = '';
        window.location.href = 'search.html';
})
}
//lyssnare för att hämta mer info om film vid klick
function moreInfoListener() {
    console.log('moreInfoListener()');
    
    let movies = document.querySelectorAll('#searchResults');
        for(let movie of movies) {
                movie.addEventListener('click', (event) => {
                event.preventDefault();

                let movies = event.target.closest(".movie-card"); //closest hämtar imdb-id från det närmsta kortet, oavsett vad användaren klickar på
                console.log(event.target);
                
                let imdbID = movies.dataset.imdbid;

                    if (!imdbID) {
                    console.error('Couldnt find the imdbID', event.target);
                    return;
                    }

                localStorage.setItem('selectedMovie', imdbID);
                window.location.href = 'movie.html';
            })
        }
}

function moreFavouriteInfoListener() {
    console.log('moreFavouriteInfoListener()');
    
    let movies = document.querySelectorAll('#favoritesContainer');
        for(let movie of movies) {
                movie.addEventListener('click', (event) => {
                event.preventDefault();

                let movies = event.target.closest(".movie-card"); //closest hämtar imdb-id från det närmsta kortet, oavsett vad användaren klickar på
                console.log(event.target);
                
                let imdbID = movies.dataset.imdbid;

                    if (!imdbID) {
                    console.error('Couldnt find the imdbID', event.target);
                    return;
                    }

                localStorage.setItem('selectedMovie', imdbID);
                window.location.href = 'movie.html';
            })
        }
}

function topMoviesListener() {
    let movies = document.querySelectorAll('#cardContainer');
        for(let movie of movies) {
            movie.addEventListener('click', (event) => {
            event.preventDefault();

            let movies = event.target.closest(".movie-card"); //closest hämtar imdb-id från det närmsta kortet, oavsett vad användaren klickar på
            console.log(event.target);
        
            let imdbID = movies.dataset.imdbid;

                if (!imdbID) {
                console.error('Couldnt find the imdbID', event.target);
                return;
                }

            localStorage.setItem('selectedMovie', imdbID);
            window.location.href = 'movie.html';
    })
}
}

function likeButtonListener() {
    const likeButtons = document.querySelectorAll(".like-btn");

    likeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            event.stopPropagation(); // 🔥 Hindra att kortet triggar klicklyssnaren
            const movieCard = event.target.closest(".movie-card");
            const imdbID = movieCard.dataset.imdbid;

            toggleLike(imdbID, event.target);
        });
    });
}
export {searchListener, moreInfoListener, topMoviesListener, likeButtonListener, moreFavouriteInfoListener};