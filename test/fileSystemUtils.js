var chai = require('chai');
var expect = chai.expect;
var FileSystemUtils = require('../src/fileSystemUtils');

describe('FileSystemUtils', function() {
  fileSystemUtils = new FileSystemUtils();

  // describe('#storeFile', function() {
  //   it('saves the file in the "data_input" folder', function() {
  //
  //
  //   });
  // });

  describe('#getFilePath', function() {
    it('returns the complete file path', function() {
      filePath = fileSystemUtils.getFilePath('testFile');
      expect(filePath).to.equal('./data_input/testFile.txt');
    });
  });
});
