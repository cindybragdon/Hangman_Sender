const applicationID = 'CINNA'
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

// GET VALUE OF ALL BUTTONS

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick, false);
});

function handleClick() {
    console.log(this.textContent);

}

// CHANGE SIZE BUTTONS

const bigger = document.getElementById("bigger");


document.getElementById('bigger').addEventListener('click', function() {
    document.querySelectorAll('.alphabet').forEach(button => {
        button.classList.replace('alphabet', 'alphabetPLUS');
    });
});