/* global words */
/* eslint no-console: "off"*/


// put letter count in DOM via list items
var letterCount = document.getElementsByClassName('.letter');
letterCount.textContent = res;

/*  Not sure we need this? 
var tries = 0; // define tries
var triesSpan = document.getElementById('tries'); // reference tries */


/* ---------------- 1). Randomly select a word from the array of 8 words ---------------- */
function loadWord() {
    function getRandomInt() {
        return Math.floor(Math.random() * 8); // get a random number between 0-8 (include 0 but not 8)
    }
    var randoNum = getRandomInt();
    return words[randoNum]; // grab word from array by matching index number
}
var word = loadWord();
/* console.log(word.length, words); // return the word length from array, with array */
/* console.log(word); // return the word from array */
var res = word.split('');






/* Inject word random word letters into lis 
var letter1 = res[0];
var letter2 = res[1];
var letter3 = res[2];
var letter4 = res[3];
var letter5 = res[4];
var letter6 = res[5];
var letter7 = res[6];
var letter8 = res[7];
var letter9 = res[8];
var letter10 = res[9];

document.getElementById('letter-1').innerHTML = letter1;
document.getElementById('letter-2').innerHTML = letter2;
document.getElementById('letter-3').innerHTML = letter3;
document.getElementById('letter-4').innerHTML = letter4;

if(res[4] !== null) {
    document.getElementById('letter-5').innerHTML = letter5;
}
if(res[5] !== null) {
    document.getElementById('letter-6').innerHTML = letter6;
}
if(res[6] !== null) {
    document.getElementById('letter-7').innerHTML = letter7;
}
if(res[7] !== null) {
    document.getElementById('letter-8').innerHTML = letter8;
}
if(res[8] !== null) {
    document.getElementById('letter-9').innerHTML = letter9;
}
if(res[9] !== null) {
    document.getElementById('letter-10').innerHTML = letter10;
}
*/

// Hide extra letters if word is longer
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



// call 'loadWord' function to start things /