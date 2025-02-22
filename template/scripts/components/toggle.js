// används i likeButtonListener() för att direkt toggla mellan gillad och icke-gillad film, tar imdbID+(like)button som parameter för att kolla ifall filmen finns i favoriter samt för att uppdatera UI och localStorage
export function toggleLike(imdbID, button) {
    let favorites = JSON.parse(localStorage.getItem("likedMovies")) || []; // hämtar array med imdbID från gillade filmer från localStorage, alternativt en tom array om ingen film gillats

    if (favorites.includes(imdbID)) { // ifall favoriter-arrayen innehåller det klickade imdbID:t
       
        favorites = favorites.filter((id) => id !== imdbID); // skapas en ny array som exkluderar det aktuella imdbID (tar bort filmen från favoriter)
        button.classList.remove("liked"); // tar bort klassen favoritfilmerna har
        button.textContent = "🤍"; // ändrar symbolen till default-läge
    } else {
        
        favorites.push(imdbID); // lägger till imdbID till favoriter-arrayen
        button.classList.add("liked"); // lägger till korrekt klass
        button.textContent = "❤️"; // ändrar symbolen
    }

    localStorage.setItem("likedMovies", JSON.stringify(favorites)); // uppdaterar localstorage
    
}