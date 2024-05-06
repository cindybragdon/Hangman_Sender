const applicationID = '749BC3C3';
// const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
// const apiConfig = new chrome.cast.ApiConfig(sessionRequest);

let currentSession;
let currentMediaSession;

document.getElementById('start-btn').addEventListener('click', () => {
   initializeCastApi();
});

function initializeCastApi() {

    const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media.DEFAULT_MEDIA_RECEIVER_APP_ID);
    // const sessionRequest = new chrome.cast.SessionRequest(chrome.cast.media(applicationID));
    const apiConfig = new chrome.cast.ApiConfig(sessionRequest, sessionListener, receiverListener);
    chrome.cast.initialize(apiConfig, onInitSuccess, onError);
}

function onInitSuccess() {
    console.log('Cast initialized');
}

function onError(error) {
    console.error('Error initializing Cast', error);
}

function sessionListener(newSession) {
    currentSession = newSession;

}
function receiverListener(availability) {
    if (availability === chrome.cast.ReceiverAvailability.AVAILABLE) {
        document.getElementById('start-btn').style.display = 'none';

    } else {
        document.getElementById('start-btn').style.display = 'none';
        document.getElementById('container').style.display = 'none';
    }
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

function handleClick() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', handleClick, false);
    });
        console.log(this.value);
    }
    const message = {
        type: 'guess',
        data: {
            button :buttons
        }
    };



