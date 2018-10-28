/* global words */
/* eslint no-console: "off"*/
/* exported guess resetLetterGuess */

/*
// put letter count in DOM via list items
var letterCount = document.getElementsByClassName('.letter');
letterCount.textContent = res;
/*

/* ---------------- 1). Randomly select a word from the array of 8 words ---------------- */
function loadWord() {
    function getRandomInt() {
        return Math.floor(Math.random() * 8); // get a random number between 0-8 (include 0 but not 8)
    }
    var randoNum = getRandomInt();
    return words[randoNum]; // grab word from array by matching index number
}
var word = loadWord();
var res = word.split('');


/* ---------------- 2). Show line blanks for each letter of the word that was selected ---------------- */
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

/* ---------------- 3. Allows the users to enter one letter "guess" at a time. ---------------- */
var guessLetterForm = document.getElementById('guess-letter-form');
var guessLetterResponse = document.getElementById('guess-letter-response');

var guessCount = res.length;
var correct = 0;
var incorrect = 0;

function guess() {
    var elements = guessLetterForm.elements;
    var guess1 = elements.number.value;
    var submit = elements.guess1;

    var guessInput = elements.guess;
    var enteredGuess = guessInput.value;

    if(enteredGuess === res[0]) {
        correct = correct + 1;
        guessInput.classList.add('correct');
        guessInput.classList.remove('incorrect');
    }
    else if(enteredGuess !== '') {
        incorrect += 1;
        guessInput.classList.add('incorrect');
        guessInput.classList.remove('correct');
    }
}

    /*
    if(guess === 'letter-1') {
        guessLetterResponse.textContent = 'You got it!';
        submit.disabled = true;
    }
    else {
        guessCount += 1;
        incorrect += 1;

        if(guessCount < 5) {
            guessLetterResponse.textContent = 'Nope, try again! You got ' + correct + ' out of ' + incorrect + ' chances.';
        }
        else {
            guessLetterResponse.textContent = 'Bummer, you lose. You got ' + incorrect + ' chances.';
            submit.disabled = true;
        }*/
    


function resetLetterGuess() {
    var elements = guessLetterForm.elements;
    var submit = elements.guess;
    // submit.disabled = false;
    guessCount = 0;
    guessLetterResponse.textContent = '';
}







//   store in word var for use in guess func

//  3.set visibility of selected word, fully hide unused letter spaces

/* guess function:
   1. called by submit of guessLetter form input submit
   2. read letter
   3. checks letter: if not a-z/A-Z, display alert char.codeAt(0)
   4. checks already guessed letters:
       if already guessed, alert
   5. a else add to letters guessed
      b increment count
      c reset guess letter input to " "
      d i if word includes the letter, letter are revealed in word to guess
        ii check for win: every letter or word is in guessed letter
      e. if word does not include letter:
        i. add body part
        ii check for lose (guesses>body parts)
      f. if win or lose condition:
        i. message user win/lose
        ii. disable guess letter button    */