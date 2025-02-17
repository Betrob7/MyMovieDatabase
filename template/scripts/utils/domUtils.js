function showErrorMessage(message) {
    let contentWrapper = document.querySelector('#carousselSection');
        let errorMessage = document.createElement('p')
        errorMessage.textContent = 'Oh no! Something went wrong, please refresh the page'
        errorMessage.classList.add('error-message-API')
        contentWrapper.prepend(errorMessage);
}

export {showErrorMessage};