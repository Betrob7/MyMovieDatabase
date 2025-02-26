import { toggleLike } from "../components/toggle.js";
import { fetchOmdbMovies } from "./api.js";
import { surpriseMovie } from "./surprise.js";
import { displayDropdownMenu } from "../utils/domUtils.js";
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
        const movieCard = event.target.closest(".movie-card"); //Sparar ner det föräldraelement med klassen movie-card som ligger närmast klickeventet
        const imdbID = movieCard.dataset.imdbid; //Använder dataset.imdbid för att hämta imdbID på det klickade kortet

            toggleLike(imdbID, event.target); //kör toggle-funktionen och skickar in imdbID och event.target(den exakta like-knappen(button) som klickas)
        });
    });
}

function backButtonListener() {
  const backBtn = document.querySelector('#backButton');
        backBtn.addEventListener('click', () => {
          window.history.back();
        })
}

function dropdownMenuListener() {
    const searchInput = document.querySelector('#searchInput');
  searchInput.addEventListener("input", async function () {
    const searchText = searchInput.value.trim();
          displayDropdownMenu(searchText);
    })
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".header__form")) {
        dropdown.style.display = "none";
      }
    });
}

function dropdownMenuMovieListener(movieList) {
  const searchInput = document.querySelector('#searchInput');
  const dropdown = document.querySelector('#dropdown');

  movieList.addEventListener("click", () => {
      const movieTitle = movieList.querySelector(".movie-title");
      if (movieTitle) {
          searchInput.value = movieTitle.textContent.trim();
          dropdown.style.display = "none";
      } else {
      dropdown.style.display = "none";
      }
  });
}




function surpriseButtonListener() {
    const surpriseBtn = document.querySelector('#surpriseBtn');
    surpriseBtn.addEventListener('click', (event) => {
      event.preventDefault();
      surpriseMovie();
    })
}

function surpriseMovieListener() {
  const surpriseMovie = document.querySelector('#surprisedResults');
        surpriseMovie.addEventListener('click', (event) => {
          let movieCard = event.target.closest('.movie-card');
          let imdbID = movieCard.dataset.imdbid;
          localStorage.setItem('selectedMovie', imdbID);
          window.location.href = 'movie.html';
        })
}

function trailerListener() {
  const trailerBtns = document.querySelectorAll('.movie-card > a');
        for(let btn of trailerBtns) {
          btn.addEventListener('click', (event) => {
            event.stopPropagation();
          })
        }
}
export {searchListener, moreInfoListener, topMoviesListener, likeButtonListener, moreFavouriteInfoListener, dropdownMenuListener, surpriseButtonListener, surpriseMovieListener, trailerListener, backButtonListener, dropdownMenuMovieListener};