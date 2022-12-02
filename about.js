const prioritiesBoxAmount = document.querySelectorAll('.priorites-box').length;
const priorites = document.querySelector('.priorites');
let activeBox = 1;
priorites.style.transform = `translateX(-${100 * activeBox}%)`;

function handleTransition(number) {
    const nextPage = activeBox + number;

    if(nextPage <= prioritiesBoxAmount - 1 && nextPage >= 0) {
        activeBox = nextPage;
        priorites.style.transform = `translateX(-${100 * activeBox}%)`;
    }
}

document.querySelector('.next-button').onclick = function() {
    handleTransition(1);
}

document.querySelector('.prev-button').onclick = function() {
    handleTransition(-1);
}