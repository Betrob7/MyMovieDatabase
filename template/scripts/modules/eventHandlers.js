function searchListener() {
    console.log('searchListener()');
    
document.querySelector('#searchForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    let userInput = document.querySelector('#searchInput').value.toLowerCase();
        localStorage.setItem('userSearch', userInput);
        window.location.href = 'search.html';
})
}
export {searchListener};