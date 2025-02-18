//lyssnare för sökrutan
function searchListener() {
    console.log('searchListener()');
    
document.querySelector('#searchForm').addEventListener('submit', async function(event) {
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
    
    let movieCard = document.querySelectorAll('#searchResults');
        for(let movie of movieCard) {
                movie.addEventListener('click', (event) => {
                event.preventDefault();

                let movieCard = event.target.closest(".movie-card"); //closest hämtar imdb-id från det närmsta kortet, oavsett vad användaren klickar på
                console.log(event.target);
                
                let imdbID = movieCard.dataset.imdbid;

                    if (!imdbID) {
                    console.error('Couldnt find the imdbID', event.target);
                    return;
                    }

                localStorage.setItem('selectedMovie', imdbID);
                window.location.href = 'movie.html';
            })
        }
}
export {searchListener, moreInfoListener};