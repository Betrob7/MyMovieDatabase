 import { fetchMovieInformation } from "./api.js";
 import { displayLikedMovie } from "../utils/domUtils.js";
 import { likeButtonListener } from "./eventHandlers.js";


 async function renderLikedMovies() {
     let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || []; //hämtar listan med gillade filmer från localStorage

     if (likedMovies.length === 0) { // kollar ifall listan är tom (ifall det finns några gillade filmer), om inte trycks ett felmeddelande ut och funktionen avslutas
         document.querySelector('#favoritesContainer').innerHTML = `<p class="favorites__error">You dont have any favorites yet!</p>`;
         return;
     }

     for (let imdbID of likedMovies) { //loopar igenom alla imdbID i likedMovies
         const movie = await fetchMovieInformation(imdbID); //sparar ner det som hämtas från API-anropet som görs på imdbID från likedMovies
         displayLikedMovie(movie); // skickar in resultatet i displayLikedMovie() som trycker ut filmerna på skärmen
     } 
     setTimeout(() => { //sätter en kort timeout så att alla korten renderas innan lyssnaren för like-knappen sätts på
            likeButtonListener();
            }, 100);
 }

 export {renderLikedMovies};