/**
 * braille
 * https://github.com/Nonemoticoner/braille
 *
 * Copyright (c) 2015 Nonemoticoner
 * Licensed under the MIT license.
 */

var BRAILLE = {
    " ": " ",
    "_": "⠸",
    "-": "⠤",
    ",": "⠠",
    ";": "⠰",
    ":": "⠱",
    "!": "⠮",
    "?": "⠹",
    ".": "⠨",
    "(": "⠷",
    "[": "⠪",
    "@": "⠈",
    "*": "⠡",
    "/": "⠌",
    "\'": "⠄",
    "\"": "⠐",
    "\\": "⠳",
    "&": "⠯",
    "%": "⠩",
    "^": "⠘",
    "+": "⠬",
    "<": "⠣",
    ">": "⠜",
    "$": "⠫",
    "0": "⠴",
    "1": "⠂",
    "2": "⠆",
    "3": "⠒",
    "4": "⠲",
    "5": "⠢",
    "6": "⠖",
    "7": "⠶",
    "8": "⠦",
    "9": "⠔",
    "A": "⠁",
    "B": "⠃",
    "C": "⠉",
    "D": "⠙",
    "E": "⠑",
    "F": "⠋",
    "G": "⠛",
    "H": "⠓",
    "I": "⠊",
    "J": "⠚",
    "K": "⠅",
    "L": "⠇",
    "M": "⠍",
    "N": "⠝",
    "O": "⠕",
    "P": "⠏",
    "Q": "⠟",
    "R": "⠗",
    "S": "⠎",
    "T": "⠞",
    "U": "⠥",
    "V": "⠧",
    "W": "⠺",
    "X": "⠭",
    "Z": "⠵",
    "]": "⠻",
    "#": "⠼",
    "Y": "⠽",
    ")": "⠾",
    "=": "⠿",
};

var ASCII = {
    " ": " ",
    "⠸": "_",
    "⠤": "-",
    "⠠": ",",
    "⠰": ";",
    "⠱": ":",
    "⠮": "!",
    "⠹": "?",
    "⠨": ".",
    "⠷": "(",
    "⠪": "[",
    "⠈": "@",
    "⠡": "*",
    "⠌": "/",
    "⠄": "\'",
    "⠐": "\"",
    "⠳": "\\",
    "⠯": "&",
    "⠩": "%",
    "⠘": "^",
    "⠬": "+",
    "⠣": "<",
    "⠜": ">",
    "⠫": "$",
    "⠴": "0",
    "⠂": "1",
    "⠆": "2",
    "⠒": "3",
    "⠲": "4",
    "⠢": "5",
    "⠖": "6",
    "⠶": "7",
    "⠦": "8",
    "⠔": "9",
    "⠁": "A",
    "⠃": "B",
    "⠉": "C",
    "⠙": "D",
    "⠑": "E",
    "⠋": "F",
    "⠛": "G",
    "⠓": "H",
    "⠊": "I",
    "⠚": "J",
    "⠅": "K",
    "⠇": "L",
    "⠍": "M",
    "⠝": "N",
    "⠕": "O",
    "⠏": "P",
    "⠟": "Q",
    "⠗": "R",
    "⠎": "S",
    "⠞": "T",
    "⠥": "U",
    "⠧": "V",
    "⠺": "W",
    "⠭": "X",
    "⠵": "Z",
    "⠻": "]",
    "⠼": "#",
    "⠽": "Y",
    "⠾": ")",
    "⠿": "=",
};

// converts character to Braille symbol
const convert = function (character) {
	return BRAILLE[character];
};

// converts Braille symbol to letter
const read = function (symbol) {
	return ASCII[symbol];
};

// ---------------------------------------

// converts text to ASCII Braille alphabet
const toBraille = function (text) {
	var upper = text.toUpperCase();
	var result = "";

	for(var i=0; i < upper.length; i++){
		symbol = convert(upper[i]);
		result += symbol!==undefined?symbol:" ";
	}

	return result;
};

// converts ASCII Braille alphabet to text
const toText =  function (code) {
	var result = "";
	
	for(var i=0; i < code.length; i++){
		symbol = read(code[i]);
		result += symbol!==undefined?symbol:"";

// converts character to Braille symbol
const convert = function (character) {
	return BRAILLE[character];
};

// converts Braille symbol to letter
const read = function (symbol) {
	return ASCII[symbol];
};

// converts text to ASCII Braille alphabet
const toBraille = function (text) {
	var upper = text.toUpperCase();
	var result = "";

	for(var i=0; i < upper.length; i++){
		symbol = convert(upper[i]);
		result += symbol!==undefined?symbol:" ";
	}

	return result;
};

// converts ASCII Braille alphabet to text
const toText =  function (code) {
	var result = "";
	
	for(var i=0; i < code.length; i++){
		symbol = read(code[i]);
		result += symbol!==undefined?symbol:"";
	}

	return result;
};

module.exports = {
  BRAILLE,
  ASCII,
  toBraille,
  toText,	
};
