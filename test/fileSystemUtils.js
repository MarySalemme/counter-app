var chai = require('chai');
var spies = require('chai-spies');
chai.use(spies);
var expect = chai.expect;
var fs = require('fs');
var mock = require('mock-fs');
var FileSystemUtils = require('../src/fileSystemUtils');

describe('FileSystemUtils', function() {
  fileSystemUtils = new FileSystemUtils();

  before(function() {
    mock({
      'path/to/file.txt': 'file content here'
    });
    spy = chai.spy(fs.createWriteStream);
  });

  describe('#storeFile', function() {
    it('saves the file in the "data_input" folder', function() {
      fileSystemUtils.storeFile();
      expect(spy).to.have.been.called;
      mock.restore();
    });
  });

  describe('#getFilePath', function() {
    it('returns the complete file path', function() {
      filePath = fileSystemUtils.getFilePath('testFile');
      expect(filePath).to.equal('./data_input/testFile.txt');
    });
  });

  describe('#readFileToArray', function() {
    it('returns an array of words', function() {
      data = fileSystemUtils.readFileToArray('testFile');
      expect(data).to.include('this', 'is', 'just', 'for', 'testing', 'purposes');
    });
  });
});
