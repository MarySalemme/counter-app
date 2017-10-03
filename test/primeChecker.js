var chai = require('chai');
var expect = chai.expect;
var isPrime = require('../src/primeChecker');

describe('#isPrime', function() {
  it('returns true if a number is prime', function() {
    expect(isPrime(13)).to.equal(true);
  });

  it('returns false if a number is not prime', function() {
    expect(isPrime(14)).to.equal(false);
  });
});
