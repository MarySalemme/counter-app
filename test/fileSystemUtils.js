var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var expect = chai.expect;
var fs = require('fs');
var mock = require('mock-fs');
const {storeFile, getFilePath, readFileToArray} = require('../src/fileSystemUtils');

describe('FileSystemUtils', function() {

  before(function() {
    mock({
      'path/to/file.txt': 'file content here'
    });
    createWriteStreamSpy = chai.spy(fs.createWriteStream);
  });

  describe('#storeFile', function() {
    it('saves the file in the "data_input" folder', function() {
      storeFile(mock);
      expect(createWriteStreamSpy).to.have.been.called;
      mock.restore();
    });
  });

  describe('#getFilePath', function() {
    it('returns the complete file path', function() {
      filePath = getFilePath('testFile')
      expect(filePath).to.equal('./data_input/testFile.txt');
    });
  });

  describe('#readFileToArray', function() {
    it('returns an array of words', function() {
      data = readFileToArray('testFile');
      expect(data).to.deep.equal([ 'this', 'is', 'just', 'for', 'testing', 'purposes', 'this', 'this', 'testing', 'this', 'testing', 'testing', 'is' ]);
    });
  });
});
