'use strict';

// selected elements for DOM manipulation
const score0El = document.getElementById('score--0') ;
const score1El = document.querySelector('#score--1') ;
const diceEl = document.querySelector('.dice');

// starting conditions
diceEl.classList.add('hidden');
score0El.textContent = 0 ;
score1El.textContent = 0 ;