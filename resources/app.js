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
});

// Memory game cards
const gameCards = document.querySelectorAll('.game-card');
let deck1 = null;
let deck2 = null;
let cardFlipped = false;
let lockBoard = false;

// for(let card of gameCards){
//     console.log(gameCards[card]);
// }

for (let card=0; card < gameCards.length; card++){
    let randPosition = Math.floor(Math.random() * 12);
    gameCards[card].style.order = randPosition;
       
    gameCards[card].addEventListener('click', flipped)
}

function flipped(e){
    const currFlip = e.target;
    const parentFlip = e.target.parentElement;
    
    if(lockBoard) return;
    if(currFlip === deck1) return;


    parentFlip.classList.add('card-flippep');
    // First card
    if(!cardFlipped){
        cardFlipped = true;
        deck1 = currFlip;
    // Second card
    }else{
        // cardFlipped = false;
        deck2 = currFlip;

        if(deck1.dataset.lang === deck2.dataset.lang){
            deck1.removeEventListener('click', flipped);
            deck2.removeEventListener('click', flipped);
            resetBoard();
        }else{
            lockBoard = true;
            setTimeout(() => {
                deck1.parentElement.classList.remove('card-flippep')
                deck2.parentElement.classList.remove('card-flippep')
                resetBoard();
            }, 1300);
        }
    }
}

function resetBoard(){
    cardFlipped = false;
    lockBoard = false;
    deck1 = null;
    deck2 = null;
}
































// for (let gameCard of gameCards){
//     gameCard.addEventListener('click', function cardClick(e) {
//         const currentClickParent = e.target.parentElement;
//         // const currentClickChild = e.target.parentElement.parentElement;
//         const dataAtt = e.target.getAttribute('data-lang');
//         if(!dataAtt){
//             return;
//         }

//         if(dataAtt){
//             currentClickParent.classList.add('card-flippep');
//             deck1 = deck1 || dataAtt;
//             deck2 = deck2 = dataAtt === deck1 ? null : dataAtt;
//             console.log(dataAtt);
//         }
//             if (deck1 === deck2) {
//               cardsFlipped += 2;
//               deck1.removeEventListener("click", handleCardClick);
//               deck2.removeEventListener("click", handleCardClick);
//               deck1 = null;
//               deck2 = null;
//             } else {
//               setTimeout(function() {
//                 currentClickParent.classList.remove("card-flipped");
//                 currentClickParent.classList.remove("card-flipped");
//                 deck1 = null;
//                 deck2 = null;
//               }, 1000);
//             }
        
//     })
// }

