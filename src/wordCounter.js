var FileSystemUtils = require('./fileSystemUtils');
var isPrime = require('./primeChecker');

function WordCounter() {
  this.words = [];
  this.countedWords = {};
  this.fsu = new FileSystemUtils();
}

WordCounter.prototype.setWords = function(fileName) {
  this.words = this.fsu.readFileToArray(fileName);
};

WordCounter.prototype.run = function() {
  var self = this;
  this.words.forEach(function(word) {
    if (self.countedWords[word] === undefined) {
      self.countedWords[word] = 1;
    } else {
      self.countedWords[word] ++;
    }
  });
};

WordCounter.prototype.addPrimeBoolean = function(number) {
  return { count: number, prime: isPrime(number) }
};

WordCounter.prototype.mapWithPrime = function() {
  for (var word in this.countedWords) {
    this.countedWords[word] = this.addPrimeBoolean(this.countedWords[word]);
  }
};

module.exports = WordCounter;
