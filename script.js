function handleToggle() {
    const hamburger = document.getElementById('hamburger');

    if(!hamburger.classList.contains('visible')) {
        hamburger.classList.add(['visible']);
    } else {
        hamburger.classList.remove(['visible']);
    }
}

const hamburgerButton = document.getElementById('hamburger-button');
const hamburgerButtonFixed = document.getElementById('hamburger-button-fixed');
const xMark = document.getElementById('x-mark'); 
xMark.onclick = function() {
    handleToggle();
}
hamburgerButton.onclick = function() {
    handleToggle();
}

hamburgerButtonFixed.onclick = function() {
    handleToggle();
}
