'use strict';

// selected elements for DOM manipulation
const score0El = document.getElementById('score--0') ;
const score1El = document.querySelector('#score--1') ;
const diceEl = document.querySelector('.dice');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

// starting conditions
diceEl.classList.add('hidden');
score0El.textContent = 0 ;
score1El.textContent = 0 ;

// add rollBtn functionality
rollBtn.addEventListener('click', function(){
    // 1 - generate a random number
    const dice = Math.floor(Math.random() * 6) + 1;
    // we can also use Math.trunc instead of Math.floor to convert the decimal number to a whole number.
    console.log(dice);
    // 2- display hidden class
    // so we want to display the dice when we hit the roll button
    diceEl.classList.remove('hidden');
});