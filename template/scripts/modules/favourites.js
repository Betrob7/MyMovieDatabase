 import { fetchMovieInformation } from "./api.js";
 import { displayLikedMovie } from "../utils/domUtils.js";
 import { likeButtonListener } from "./eventHandlers.js";


 async function renderLikedMovies() {
     let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || []; //hämtar listan med gillade filmer från localStorage

     if (likedMovies.length === 0) { // kollar ifall listan är tom (ifall det finns några gillade filmer), om inte trycks ett felmeddelande ut och funktionen avslutas
         document.querySelector('#favoritesContainer').innerHTML = `<p>You dont have any favorites yet!</p>`;
         return;
     }

     for (let imdbID of likedMovies) { //loopar igenom alla imdbID i likedMovies
         const movie = await fetchMovieInformation(imdbID); //sparar ner det som hämtas från API-anropet som görs på imdbID från likedMovies
         displayLikedMovie(movie); // skickar in resultatet i displayLikedMovie() som trycker ut filmerna på skärmen
     } 
     setTimeout(() => {
            likeButtonListener();
            }, 100);
 }

 export {renderLikedMovies};

// import { fetchMovieInformation } from "./api.js";
// import { displayLikedMovie } from "../utils/domUtils.js";
// import { likeButtonListener } from "../modules/eventHandlers.js";

// async function renderLikedMovies() {
//     const likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || [];
//     const container = document.querySelector('#favoritesContainer');
//     container.innerHTML = '';

//     if (likedMovies.length === 0) {
//         container.innerHTML = `<p>You don't have any favorites yet!</p>`;
//         return;
//     }

//     // 💡 ⚡ VÄNTA tills alla filmer är hämtade
//     const movies = await Promise.all(
//         likedMovies.map((imdbID) => fetchMovieInformation(imdbID))
//     );

//     // 🏃‍♂️ Rendera alla kort direkt
//     movies.forEach((movie) => displayLikedMovie(movie));
//     setTimeout(() => {
//         likeButtonListener();
//     }, 100);

//     // 💥 Koppla lyssnaren EFTER att allt är klart
    
// }
// export { renderLikedMovies };


// import { fetchMovieInformation } from "./api.js";
// import { displayLikedMovie } from "../utils/domUtils.js";
// import { likeButtonListener } from "./eventHandlers.js";


// async function renderLikedMovies() {
//     let likedMovies = JSON.parse(localStorage.getItem("likedMovies")) || []; //hämtar listan med gillade filmer från localStorage

//     if (likedMovies.length === 0) { // kollar ifall listan är tom (ifall det finns några gillade filmer), om inte trycks ett felmeddelande ut och funktionen avslutas
//         document.querySelector('#favoritesContainer').innerHTML = `<p>You dont have any favorites yet!</p>`;
//         return;
//     }

//     for (let imdbID of likedMovies) { //loopar igenom alla imdbID i likedMovies
//         const movie = await fetchMovieInformation(imdbID); //sparar ner det som hämtas från API-anropet som görs på imdbID från likedMovies
//         displayLikedMovie(movie); // skickar in resultatet i displayLikedMovie() som trycker ut filmerna på skärmen
//     } 
//     likeButtonListener();
// }

// export {renderLikedMovies};