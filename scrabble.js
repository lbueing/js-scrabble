var Scrabble = function() {};


Scrabble.prototype.letterValue = function(letter) {
  var values = {
    one: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
    two: ['D', 'G'],
    three: ['B', 'C', 'M', 'P'],
    four: ['F', 'H', 'V', 'W', 'Y'],
    five: ['K'],
    eight: ['J', 'X'],
    ten: ['Q', 'Z']
  };

  if (values.one.indexOf(letter) != -1) {
    return (1);
  } else if (values.two.indexOf(letter) != -1) {
     return (2);
  } else if (values.three.indexOf(letter) != -1) {
     return (3);
  } else if (values.four.indexOf(letter) != -1) {
     return (4);
  } else if (values.five.indexOf(letter) != -1) {
     return (5);
  } else if (values.eight.indexOf(letter) != -1) {
     return (8);
  } else if (values.ten.indexOf(letter) != -1) {
     return (10);
  }



};

var parseWord = function(word) {
  splitWord = word.toUpperCase().split("");
  return splitWord;
};

var scoreWord = function(word) {
  var points = 0;
  for (var val of parseWord(word)) {
    points = points + scrabble.letterValue(val);
  }
  if (parseWord(word).length == 7) {
    points += 50;
  }
  return points;
};

  var highestScoreFrom = function(array) {
    var max = 0;
    var maxWord = "";
    for (var val of array) {
      if ( scoreWord(val) > max ) {
        max = scoreWord(val);
        maxWord = val;
      } else if ( scoreWord(val) == max && (scoreWord(val).length < maxWord.length || scoreWord(val).length == 7 && maxWord.length < 7 )) {
        max = scoreWord(val);
        maxWord = val;
      }
    } return maxWord;
  };

// YOUR CODE HERE
Scrabble.prototype.helloWorld = function() {
  return 'hello world!';
};

module.exports = Scrabble;


var scrabble = new Scrabble();
val = scrabble.letterValue('Q');
console.log(val);

var test = scoreWord("bat");
console.log(test);

var array = ['jar', 'cookie', 'marshie', 'tool', 'zzz']
console.log(highestScoreFrom(array))
