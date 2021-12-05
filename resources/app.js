// Memory game letters animation
const letters = document.querySelectorAll('.letter');
function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    // const b = Math.floor(Math.random() * 256);
    const b = 0;
    return `rgb(${r}, ${g}, ${b}`;
}
setInterval(() => {
    for (let letter of letters) {
        letter.style.color = randomRGB(); 
    }
}, 500);


// Declare variables
const header = document.getElementById('header');
const gameBoard = document.getElementById('gameBoard');

// Button action
const btn = document.querySelector('.btn');
btn.addEventListener('click', function showUp(e) {
    e.preventDefault();
    if(e.target){
        header.style.display = 'none';
        gameBoard.style.display = 'block';

    }
})

// Memory game cards



