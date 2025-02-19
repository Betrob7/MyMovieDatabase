export function toggleLike(imdbID, button) {
    let favorites = JSON.parse(localStorage.getItem("likedMovies")) || [];

    if (favorites.includes(imdbID)) {
        // 🔥 Ta bort like
        favorites = favorites.filter((id) => id !== imdbID);
        button.classList.remove("liked");
        button.textContent = "🤍";
    } else {
        // 🔥 Lägg till like
        favorites.push(imdbID);
        button.classList.add("liked");
        button.textContent = "💖";
    }

    localStorage.setItem("likedMovies", JSON.stringify(favorites));
    console.log(`⭐ Uppdaterade likes:`, favorites);
}