const http = require("http");
var fs = require('fs');
const { storeFile } = require('./src/fileSystemUtils');
var WordCounter = require('./src/wordCounter');

function runApp(url, fileName) {
  http.get(url, response => {
    var fileWriteStream = storeFile(fileName);
    fileWriteStream.on('finish', function() {
      var counter = new WordCounter();
      counter.setWords(fileName);
      counter.run();
      counter.mapWithPrime();
      fs.writeFileSync('./data_output/' + fileName, JSON.stringify(counter.countedWords, null, 4));
    });
    response.pipe(fileWriteStream);
  });
};

runApp('http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt', 'Railway_Children');
