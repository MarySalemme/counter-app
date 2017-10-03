var fs = require('fs');

function FileSystemUtils() {
  this.directory = './data_input/';
}

FileSystemUtils.prototype.storeFile = function(fileName) {
  const file = fs.createWriteStream(this.directory + fileName + '.txt');
  return file;
};

FileSystemUtils.prototype.getFilePath = function(fileName) {
  return this.directory + fileName + '.txt'
};


module.exports = FileSystemUtils;
