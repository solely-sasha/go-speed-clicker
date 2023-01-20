const counter = document.querySelector('.counter');

const counterButton = document.getElementById('counter');
const resetButton = document.getElementById('reset');
const clicked = document.getElementById('clicks');
clicked.innerHTML = localStorage.getItem('clicked')


let clicks = 0;

function click() {

    clicks += 1;
    // clicked.textContent = `clicked: ${clicks}`
    localStorage.setItem("clicked", clicks ) ;
clicked.innerHTML = localStorage.getItem('clicked')


}
counterButton.addEventListener('click', click)

resetButton.addEventListener('click', function () {
    clicks = 0;
    clicked.textContent = clicks;
})

