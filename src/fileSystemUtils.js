var fs = require('fs');

function storeFile(fileName) {
  const file = fs.createWriteStream(getFilePath(fileName));
  return file;
};

function getFilePath(fileName) {
  return './data_input/' + fileName + '.txt'
};

function readFileToArray(fileName) {
  data = fs.readFileSync(getFilePath(fileName), "utf8");
  return data.toLowerCase().replace(/[^\w\s]|_/g, '').split(/\s+/).filter(Boolean);
};

module.exports.storeFile = storeFile;
module.exports.getFilePath = getFilePath;
module.exports.readFileToArray = readFileToArray;
