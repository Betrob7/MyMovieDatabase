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
//lyssnare för att hämta mer info om en film användaren fått fram via sökresultat
function moreInfoListener() {
    console.log('moreInfoListener()');
    
    let movies = document.querySelectorAll('#searchResults'); //sparar ner alla filmer från sökresultatet i en array
        for(let movie of movies) { //loopar igenom arrayen och lägger till lyssnare på varje enskild film
                movie.addEventListener('click', (event) => {
                event.preventDefault(); 

                let movies = event.target.closest(".movie-card"); //closest sparar ner närmsta föräldern till det element som klickas
                console.log(event.target);
                
                let imdbID = movies.dataset.imdbid; //hämtar ut imdbID från den klickade filmen och sparar ner i imdbID

                    if (!imdbID) { //felhantering, om inget imdbID hittas så loggas ett felmeddelande och sen avslutas funktionen
                    console.error('Couldnt find the imdbID', event.target);
                    return;
                    }

                localStorage.setItem('selectedMovie', imdbID); //sparar den valda filmens imdbID som värde till nyckeln selectedMovie i localStorage
                window.location.href = 'movie.html'; // skickar användaren vidare till sidan för mer info om filmen
            })
        }
}
//lyssnare för att hämta mer info om filmerna som ligger på favoritsidan
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
//lyssnare för att hämta mer info om filmerna på första sidan
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
//lyssnare för like-knappen(hjärtat)
function likeButtonListener() {
    const likeButtons = document.querySelectorAll(".like-btn"); //sparar ner alla like-knappar

    likeButtons.forEach((button) => { //loopar igenom och lägger till en lyssnare på like-knappen på varje enskild kort
        button.addEventListener("click", (event) => {
        event.stopPropagation(); //Hindrar att ett klick på like-knappen triggar den andra klicklyssnaren som sitter på hela kortet
        const movieCard = event.target.closest(".movie-card"); //Sparar ner det föräldraelement med klassen movie-card som ligger närmast klickeventet
        const imdbID = movieCard.dataset.imdbid; //Använder dataset.imdbid för att hämta och spara imdbID:t på det klickade kortet

            toggleLike(imdbID, event.target); //Kör toggle-funktionen som uppdaterar UI:t (hjärtat) och sparar/uppdaterar localStorage
        });
    });
}
//lyssnare för tillbaka knappen på mer-info(movie.html) sidan
function backButtonListener() {
  const backBtn = document.querySelector('#backButton');
        backBtn.addEventListener('click', () => { //vid klick på knappen tas användaren tillbaka till föregående sida
          window.history.back();
        })
}
//lyssnare för dropdown menyn
function dropdownMenuListener() {
    const searchInput = document.querySelector('#searchInput');
  searchInput.addEventListener("input", async function () { //lyssnar efter input på sökfältet
    const searchText = searchInput.value.trim(); //sparar ner en trimmad version av användarens input
          displayDropdownMenu(searchText); //kör displayDropdownMenu med användarens input som argument
    })
    document.addEventListener("click", (event) => { //lyssnar efter klick var som helst på sidan
      if (!event.target.closest(".header__form")) { //om klicket sker utanför sökformuläret
        dropdown.style.display = "none"; //så göms dropdown-menyn
      }
    });
}
//lyssnare för filmerna i dropdown-menyn
function dropdownMenuMovieListener(movieList) {
  const searchInput = document.querySelector('#searchInput');
  const dropdown = document.querySelector('#dropdown');

  movieList.addEventListener("click", () => { //sätter lyssnaren på list-elementet(varje li-element innehåller en filmtitel)
      const movieTitle = movieList.querySelector(".movie-title"); //vid klick sparas den klickade filmens titel ner
          searchInput.value = movieTitle.textContent.trim();
          dropdown.style.display = "none"; //dropdown-menyn försvinner
      
  });
}
//lyssnar på surprise me knappen
function surpriseButtonListener() {
    const surpriseBtn = document.querySelector('#surpriseBtn'); 
    surpriseBtn.addEventListener('click', (event) => {
      event.preventDefault();
      surpriseMovie(); 
    })
}
//lyssnar på surprise me filmen
function surpriseMovieListener() {
  const surpriseMovie = document.querySelector('#surprisedResults');
        surpriseMovie.addEventListener('click', (event) => {
          let movieCard = event.target.closest('.movie-card');
          let imdbID = movieCard.dataset.imdbid;
          localStorage.setItem('selectedMovie', imdbID); //samma koncept som tidigare för att hämta mer info, skriver över värdet till selectedMovie för att sen hämta det nya värdet när använder kommer till movie.html
          window.location.href = 'movie.html';
        })
}
//lyssnar på trailer-knapparna
function trailerListener() {
  const trailerBtns = document.querySelectorAll('.movie-card > a');
        for(let btn of trailerBtns) {
          btn.addEventListener('click', (event) => {
            event.stopPropagation();
          })
        }
}
export {searchListener, moreInfoListener, topMoviesListener, likeButtonListener, moreFavouriteInfoListener, dropdownMenuListener, surpriseButtonListener, surpriseMovieListener, trailerListener, backButtonListener, dropdownMenuMovieListener};