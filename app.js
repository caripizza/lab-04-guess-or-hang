/* global words */
/* eslint no-console: "off"*/
/* exported guess resetLetterGuess */


/* ------- 1). Randomly select a word from the array of 8 words ---------------- */
function loadWord() {
    function getRandomInt() {
        return Math.floor(Math.random() * 8); // get a random number between 0-8 (include 0 but not 8)
    }
    var randoNum = getRandomInt();
    return words[randoNum]; // grab word from array by matching index number
}
var word = loadWord();
var res = word.split('');


/* ------- 2). Show letters and line blanks for word that was selected ---------------- */
var letters = document.querySelectorAll('.letter');
for(var i = 0; i < letters.length; i++) {
    var li = letters[i];
    var letterToDisplay = res[i];
    if(i < word.length) {
        li.textContent = letterToDisplay;
        li.classList.remove('hidden');
    }
    else {
        li.classList.add('hidden');
    }
}



/* ------- 3. Allows the users to enter one letter "guess" at a time. ---------------- */
/* 
var guessLetterForm = document.getElementById('guess-letter-form');
var guessLetterResponse = document.getElementById('guess-letter-response').textContent;

var guessCount = res.length;
var correct = 0;
var incorrect = 0;

function guess() {
} 
*/



/* ------- Some type of Reset button functionality
function resetLetterGuess() {
    var guessFormElements = guessLetterForm.guessFormElements;
    var submit = guessFormElements.guess;
    // submit.disabled = false;
    guessCount = 0;
    guessLetterResponse.textContent = '';
} */