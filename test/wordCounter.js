var chai = require('chai');
var expect = chai.expect;
var WordCounter = require('../src/wordCounter');
var FileSystemUtils = require('../src/fileSystemUtils');

describe('WordCounter', function() {
  counter = new WordCounter();

  it('is initialised with an empty array', function() {
    expect(counter.words).to.be.empty;
    expect(counter.words).to.be.instanceOf(Array);
  });

  it('is initialised with an empty object', function() {
    expect(counter.countedWords).to.be.empty;
    expect(counter.words).to.be.instanceOf(Object);
  });

  it('is initialised with an instance of FileSystemUtils', function() {
    expect(counter.fsu).to.be.instanceOf(FileSystemUtils);
  });

  describe('#setWords', function() {
    it('takes the result of the processed file and saves it into an array', function() {
      counter.setWords('testFile');
      expect(counter.words).to.deep.equal([ 'this', 'is', 'just', 'for', 'testing', 'purposes', 'this', 'this', 'testing', 'this', 'testing', 'testing', 'is' ])
    });
  });

  describe('#run', function() {
    it('creates an object containing the words and their respective count', function() {
      counter.run();
      expect(counter.countedWords).to.deep.equal({ this: 4, is: 2, just: 1, for: 1, testing: 4, purposes: 1 });
    });
  });

  describe('#addPrimeBoolean', function() {
    it('returns an object containing the count and the "prime" boolean value ', function() {
      countAndBoolObj = counter.addPrimeBoolean(2);
      expect(countAndBoolObj).to.deep.equal({ count: 2, prime: true });
    });
  });

  describe('#mapWithPrime', function() {
    it('mutates the countedWords object to add the prime boolean value', function() {
      counter.mapWithPrime();
      expect(counter.countedWords).to.deep.equal({ this: { count: 4, prime: false },
                                                          is: { count: 2, prime: true },
                                                          just: { count: 1, prime: false },
                                                          for: { count: 1, prime: false },
                                                          testing: { count: 4, prime: false },
                                                          purposes: { count: 1, prime: false } });
    });
  });



});
