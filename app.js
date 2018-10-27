/* global words */
/* eslint no-console: "off" */

// get a random number between 0-8, then return matching word from array index
function randoWord() {
    function getRandomInt() {
        return Math.floor(Math.random() * 8 );
    }
    var randoNum = getRandomInt();
    return words[randoNum];
}

// display random number with words array in console log
var guessMe = randoWord();
console.log(guessMe.length, words);
console.log(guessMe);
var res = guessMe.split('');
console.log(res);
var letter1 = res[1];
console.log(letter1);





// loadWord function: randomly select from index

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

/* function guessTheWord() {
 while (wrong-guesses <= 6) {
   if (guess-entry == )
 }
} */

// call 'loadWord' function to start things