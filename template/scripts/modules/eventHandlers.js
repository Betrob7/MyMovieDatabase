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
export {searchListener};