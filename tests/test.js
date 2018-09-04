var should, Braille;

should = require('should');
Braille = require('../index.js');

describe('ASCII to braille: ', function () {
    it('should return a blank space if it does not found an ASCII character', function () {
        Braille.convert('º').should.equal('?');
    });

    it('should return the braille unicode char if the ASCII char exists', function () {
        Braille.convert('A').should.equal('⠁');
    });

    it('should convert an ASCII string into a braille unicode string', function () {
        Braille.toBraille('HELLO WORLD').should.equal('⠓⠑⠇⠇⠕⠀⠺⠕⠗⠇⠙');
    });

    it('full coverage test', function () {
        var ascii = " A1B\'K2L@CIF/MSP\"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)=",
            dot6 = "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿";

        Braille.toBraille(ascii).should.equal(dot6);
    });
});

describe('braille to ASCII: ', function () {
    it('should return a blank space if it does not found a braille unicode char', function () {
        Braille.read('A').should.equal('?');
    });

    it('should return the ASCII char if the braille unicode char exists', function () {
        Braille.read('⠁').should.equal('A');
    });

    it('should convert a Braille string into an ASCII string', function () {
        Braille.toText('⠓⠑⠇⠇⠕ ⠺⠕⠗⠇⠙').should.equal('HELLO WORLD');
    });

    it('full coverage test', function () {
        var ascii = ' A1B\'K2L@CIF/MSP\"E3H9O6R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)=',
            dot6 = '⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿';

        Braille.toText(dot6).should.equal(ascii);
    });
});
