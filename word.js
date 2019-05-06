// Contains a constructor, Word that depends on the
// Letter constructor. This is used to create an object
// representing the current word the user is attempting
// to guess. That means the constructor should define:
var Letter = require("./letter");

function Word(word) {
  this.constructWord = function(word) {
    //   * An array of `new` Letter objects representing the
    //   letters of the underlying word

    var temp = [];
    for (var i = 0; i < word.length; i++) {
      var currentChar = word[i];
      var currentLetter = new Letter(currentChar);
      temp.push(currentLetter);
    }
    return temp;
  };
  //   * A function that returns a string representing the
  //   word. This should call the function on each letter
  //   object (the first function defined in `Letter.js`)
  //   that displays the character or an underscore and
  //   concatenate those together.

  this.word = this.construct(word);

  this.display = function() {
    var displayWord = "";
    for (var i = 0; i < this.word.length; i++) {
      var currentLetter = this.word[i];
      displayWord += currentLetter.display() + " ";
    }
    console.log(displayWord);
  };
  //   * A function that takes a character as an argument
  //   and calls the guess function on each letter object
  //   (the second function defined in `Letter.js`)
  this.checkLetter = function(ltr) {
      for (var i = 0; i < this.word.length; i++) {
          var currentChar = this.word[i];
          console.log(currentLetter);
          currentLetter.checkGuess(ltr);
      }
      return this.display;
  };
}
module.exports = Word;

