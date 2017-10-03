var FileSystemUtils = require('./fileSystemUtils');

function WordCounter() {
  this.words = [];
  this.countedWords = {};
  this.fsu = new FileSystemUtils();
  self = this;
}

WordCounter.prototype.setWords = function(fileName) {
  this.words = this.fsu.readFileToArray(fileName);
};

WordCounter.prototype.run = function() {
  this.words.forEach(function(word) {
    if (self.countedWords[word] === undefined) {
      self.countedWords[word] = 1;
    } else {
      self.countedWords[word] ++;
    }
  });
};

module.exports = WordCounter;
