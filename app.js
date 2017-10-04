const http = require("http");
var fs = require('fs');
var WordCounter = require('./src/wordCounter');
var counter = new WordCounter();

function runApp(url, fileName) {
  http.get(url, response => {
    var fileWriteStream = counter.fsu.storeFile(fileName);
    fileWriteStream.on('finish', function() {
      counter.setWords(fileName);
      counter.run();
      counter.mapWithPrime();
      fs.writeFileSync('./data_output/' + fileName, JSON.stringify(counter.countedWords, null, 4));
    });
    response.pipe(fileWriteStream);
  });
};

runApp('http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt', 'Railway_Children');
