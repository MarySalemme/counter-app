var chai = require('chai');
var expect = chai.expect;
var WordCounter = require('../src/wordCounter');
var FileSystemUtils = require('../src/fileSystemUtils');

describe('WordCounter', function() {
  wordCounter = new WordCounter();

  it('is initialised with an empty array', function() {
    expect(wordCounter.processedArray).to.be.empty;
  });

  it('is initialised with an instance of FileSystemUtils', function() {
    expect(wordCounter.fsu).to.be.instanceOf(FileSystemUtils);
  });


  describe('#setProcessedArray', function() {
    it('adds the processed file to the array', function() {
      wordCounter.setProcessedArray('testFile');
      expect(wordCounter.processedArray).to.deep.equal([ 'this', 'is', 'just', 'for', 'testing', 'purposes' ])
    });
  });

});
