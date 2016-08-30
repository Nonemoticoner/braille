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
    "=": "⠿"
  },

  ASCII = {
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
    "⠿": "="
  };

module.exports = {
  convert: function (character) {
    return !!BRAILLE[character] ? BRAILLE[character] : " ";
  },

  read: function (symbol) {
    return !!ASCII[symbol] ? ASCII[symbol] : " ";
  },

  toBraille: function (text) {
    var upperText, upperTextLength, brailleText, i;

    upperText = text.toUpperCase();
    upperTextLength = upperText.length;
    brailleText = "";

    for(i = 0; i < upperTextLength; i++) {
      brailleText += this.convert(upperText[i]);
    }

    return brailleText;
  },

  toText: function (code) {
    var codeLength, asciiText, i;

    codeLength = code.length;
    asciiText = "";

    for(i = 0; i < codeLength; i++) {
      asciiText += this.read(code[i]);
    }

    return asciiText;
  }
};
