var fs = require('fs');

function FileSystemUtils() {

}

FileSystemUtils.prototype.storeFile = function(fileName) {
  const file = fs.createWriteStream(this.getFilePath(fileName));
  return file;
};

FileSystemUtils.prototype.getFilePath = function(fileName) {
  return './data_input/' + fileName + '.txt'
};

FileSystemUtils.prototype.readFileToArray = function(fileName) {
  data = fs.readFileSync(this.getFilePath(fileName), "utf8");
  return data.toLowerCase().replace(/[^\w\s]|_/g, '').split(/\s+/).filter(Boolean);
};

module.exports = FileSystemUtils;
