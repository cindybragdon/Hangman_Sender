const applicationID = '0DFBBA32';

let currentSession;
let currentMediaSession;

document.getElementById('start-btn').addEventListener('click', () => {
   initializeCastApi();
});

function initializeCastApi() {

    const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media(applicationID));
    const apiConfig = new chrome.cast.ApiConfig(sessionRequest);
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}

function onInitSuccess() {
    console.log('Cast initialized');
}

function onError(error) {
    console.error('Error initializing Cast', error);
}

// CHERCHER LA VALEUR DES BOUTONS

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick, false);
});

function handleClick() {
    console.log(this.value);

}

// CHANGER LA GROSSEUR DES BOUTONS

const bigger = document.getElementById("bigger");


document.getElementById('bigger').addEventListener('click', function() {

    document.querySelectorAll('.alphabet').forEach(button => {
        button.classList.replace('alphabet', 'alphabetPLUS');
    });
});