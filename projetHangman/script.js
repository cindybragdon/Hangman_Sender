const applicationID = "0DFBBA32";
let currentSession;

const CHANNEL1 = 'urn:x-cast:cinna';

function initializeCastSdk() {
    // Check if the Cast SDK is available
    if (chrome.cast && chrome.cast.isAvailable) {
        const sessionRequest = new chrome.cast.SessionRequest(applicationID);
        var apiConfig = new chrome.cast.ApiConfig(sessionRequest,
            sessionListener,
            receiverListener);
        chrome.cast.initialize(apiConfig, onInitSuccess, onError);
    } else {
        console.error('Cast SDK not available');
    }
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
        console.log('Chromecast device is available');
        console.log(currentSession)
        document.getElementById("container").style.display="block";
        document.getElementById("start-btn").style.display="none";
        document.getElementById("howToPlay").style.display="none";
    } else {
        console.log('Chromecast device is not available');
    }
}

document.getElementById('start-btn').addEventListener('click', () => {
    initializeCastSdk();
});


const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick, false);
});

function handleClick() {
    const letter = this.value;
    console.log(letter);
    this.disabled = true;
    sendData(letter);
}

document.getElementById('bigger').addEventListener('click', function() {
    document.querySelectorAll('.alphabet').forEach(button => {
        let curW = parseFloat(window.getComputedStyle(button).width);
        let curH = parseFloat(window.getComputedStyle(button).height);
        let curSize = parseFloat(window.getComputedStyle(button).fontSize);
        let newW = curW * 1.2;
        let newH = curH * 1.2;
        let newSize = curSize * 1.2;
        button.style.width = newW + 'px';
        button.style.height = newH + 'px';
        button.style.fontSize = newSize + 'px';
    });
});

document.getElementById('smaller').addEventListener('click', function() {
    document.querySelectorAll('.alphabet').forEach(button => {
        let curW = parseFloat(window.getComputedStyle(button).width);
        let curH = parseFloat(window.getComputedStyle(button).height);
        let curSize = parseFloat(window.getComputedStyle(button).fontSize);
        let newW = curW * 0.8;
        let newH = curH * 0.8;
        let newSize = curSize * 0.8;
        button.style.width = newW + 'px';
        button.style.height = newH + 'px';
        button.style.fontSize = newSize + 'px';
    });
});

// function sendData(letter) {
//     const messageToBeSent = letter;
//     console.log('Sending message:', messageToBeSent);
//     if (currentSession) {
//         currentSession.sendMessage(CHANNEL1, messageToBeSent, () => {
//             console.log('Message sent');
//         }, error => {
//             console.error('Error:', error);
//         });
//     } else {
//         console.error('No active session');
//     }
// }

function sendData(letter) {
    const msg = {letter: letter}
    currentSession.sendMessage(CHANNEL1, msg);
}
