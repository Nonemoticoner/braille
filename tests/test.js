var should, Braille;

should  = require("should");
Braille = require("../index.js");

describe('ASCII to braille: ', function () {
  it('should return a blank space if it does not found an ASCII character', function () {
    Braille.convert('º').should.equal(' ');
  });

  it('should return the braille unicode char if the ASCII char exists', function() {
    Braille.convert('A').should.equal('⠁');
  });

  it('should convert an ASCII string into a braille unicode string', function() {
    Braille.toBraille('HELLO WORLD').should.equal('⠓⠑⠇⠇⠕ ⠺⠕⠗⠇⠙');
  });
});

describe('braille to ASCII: ', function () {
  it('should return a blank space if it does not found a braille unicode char', function () {
    Braille.read(' ').should.equal(' ');
  });

  it('should return the ASCII char if the braille unicode char exists', function() {
    Braille.read('⠁').should.equal('A');
  });

  it('should convert a Braille string into an ASCII string', function() {
    Braille.toText('⠓⠑⠇⠇⠕ ⠺⠕⠗⠇⠙').should.equal('HELLO WORLD');
  });
});
