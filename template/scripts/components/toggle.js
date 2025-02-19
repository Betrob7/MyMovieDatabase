export function toggleLike(imdbID, button) {
    let favorites = JSON.parse(localStorage.getItem("likedMovies")) || []; // hämtar favoriter från localStorage

    if (favorites.includes(imdbID)) { //kollar ifall favoriter inkluderar imdbID
       
        favorites = favorites.filter((id) => id !== imdbID); // skapar en ny lista som exkluderar det aktuella imdbID (tar bort filmen från favoriter)
        button.classList.remove("liked"); // tar bort klassen favoritfilmerna har
        button.textContent = "🤍"; // ändrar symbolen till default-läge
    } else {
        
        favorites.push(imdbID); // lägger till imdbID till favoriter
        button.classList.add("liked"); // lägger till korrekt klass
        button.textContent = "💖"; // ändrar symbolen
    }

    localStorage.setItem("likedMovies", JSON.stringify(favorites)); // uppdaterar localstorage
    
}