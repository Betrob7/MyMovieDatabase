import { toggleLike } from "../components/toggle.js";
//lyssnare för sökrutan
function searchListener() {
    console.log('searchListener()');
    
document.querySelector('#searchForm').addEventListener('submit', function(event) { // lyssnar på submit på formuläret
    event.preventDefault();

    let searchInput = document.querySelector('#searchInput');
    let userInput = document.querySelector('#searchInput').value.toLowerCase(); //sparar ner användarens sökning
        localStorage.setItem('userSearch', userInput); //sparar sökningen i localStorage med nyckeln 'userSearch', använder alltid samma nyckel vilket gör att den gamla sökningen skrivs över varje gång
        searchInput.value = ''; //tömmer sökfältet
        window.location.href = 'search.html'; //skickar användaren vidare till söksidan
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

            let movies = event.target.closest(".movie-card"); 
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
            event.stopPropagation(); //Hindrar att en like triggar den andra klicklyssnaren
            const movieCard = event.target.closest(".movie-card"); //Sparar ner det föräldraelement med klassen movie-card som ligger närmst klickeventet
            const imdbID = movieCard.dataset.imdbid; //Använder metoden dataset.imdbid för att hämta imdbID på det klickade kortet

            toggleLike(imdbID, event.target); //kör toggle-funktionen och skickar in imdbID och even.target(den exakta like-knappen(button) som klickas)
        });
    });
}
export {searchListener, moreInfoListener, topMoviesListener, likeButtonListener, moreFavouriteInfoListener};