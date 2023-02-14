'use strict';

// selected elements for DOM manipulation
const player0El =document.querySelector('.player--0');
const player1El =document.querySelector('.player--1');
const score0El = document.getElementById('score--0') ;
const score1El = document.querySelector('#score--1') ;
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');

// initialize currentScore
let currentScore = 0;
// so we are storing the scores of both players in an array, NB-an array is zero-based.
let scores = [0,0];
let activePlayer = 0;

// starting conditions
diceEl.classList.add('hidden');
score0El.textContent = 0 ;
score1El.textContent = 0 ;

const switchPlayer = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
};

// add rollBtn functionality
rollBtn.addEventListener('click', function(){
    // 1 - generate a random number
    const dice = Math.floor(Math.random() * 6) + 1;
    // we can also use Math.trunc instead of Math.floor to convert the decimal number to a whole number.
    console.log(dice);
    // 2- display hidden class
    // so we want to display the dice when we hit the roll button
    diceEl.classList.remove('hidden');
    // so we want to dynamically load one of the six images
    diceEl.src = `dice-${dice}.png`;
    // 3 - if the dice = 1, switch to next player
    if(dice !== 1){
        // when the dice = 1
        currentScore += dice;
        // this will dynamically select score element based on the active player
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }else{
    // when the dice is not = 1, switch to next player.
    // so before we switch to next player, score should be 0
        // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // if the active player is 0, then we want the new active player to be 1, else it should be 0.
    // so we want to swith between player 0 and 1 
        // activePlayer = activePlayer === 0 ? 1 : 0;
    // we also want the score to switch back to 0
        // currentScore = 0;
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');
        switchPlayer();
    }
});

holdBtn.addEventListener('click', function(){
    // add current score to active player's score
    scores[activePlayer] += currentScore;
    // so we want to change 0 and 1 dynamically
    document.getElementById(`current--${activePlayer}`).textContent = scores[activePlayer];
});