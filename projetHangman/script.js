const applicationID = 'CINNA';
const sessionRequest = new chrome.cast.SessionRequest(applicationID);
const apiConfig = new chrome.cast.ApiConfig(sessionRequest);

document.getElementById('start-btn').addEventListener('click', () => {
    initializeCastApi();
});

function initializeCastApi() {
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}

function onInitSuccess() {
    console.log('Cast initialized');
}

function onError(error) {
    console.error('Error initializing Cast', error);
}

const buttons = document.querySelectorAll('.alphabet');

function changeClassToAlphabetPLUS() {

    buttons.forEach(button => {
        button.classList.replace('alphabet', 'alphabetPLUS');
    });
}

document.getElementById('bigger').addEventListener('click', changeClassToAlphabetPLUS);



buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log(button.innerText);
    });
});



