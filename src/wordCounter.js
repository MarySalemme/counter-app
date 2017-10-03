var FileSystemUtils = require('./fileSystemUtils');

function WordCounter() {
  this.processedArray = [];
  this.fsu = new FileSystemUtils();
}

WordCounter.prototype.setProcessedArray = function(fileName) {
  this.processedArray = this.fsu.readFileToArray(fileName);
};

module.exports = WordCounter;
