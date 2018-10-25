
/* loadWord function:
  1.Gets a random integer between 0 (inclusive) and length of words (exclusive max 10)    
  2. select word from array - with that i
   store in word var for use in guess func
  3.set visibility of selected word, fully hide unused letter spaces 
*/
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
         ii. disable guessletter button    
*/    
/* call 'loadWord' function to start things

