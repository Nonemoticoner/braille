/**
 * braille
 * https://github.com/Nonemoticoner/braille
 *
 * Copyright (c) 2015-2018 Nonemoticoner
 * Licensed under the MIT license.
 */

var BRAILLE = {
        ' ': '⠀',   // space bar to dot-0
        '_': '⠸',
        '-': '⠤',
        ',': '⠠',
        ';': '⠰',
        ':': '⠱',
        '!': '⠖',
        '?': '⠹',
        '.': '⠨',
        '(': '⠷',
        '[': '⠪',
        '@': '⠈',
        '*': '⠡',
        '/': '⠌',
        '\'': '⠄',
        '\"': '⠐',
        '\\': '⠳',
        '&': '⠯',
        '%': '⠩',
        '^': '⠘',
        '+': '⠬',
        '<': '⠣',
        '>': '⠜',
        '$': '⠫',
        '0': '⠴',
        '1': '⠂',
        '2': '⠆',
        '3': '⠒',
        '4': '⠲',
        '5': '⠢',
        '6': '⠋',
        '7': '⠶',
        '8': '⠦',
        '9': '⠔',
        'A': '⠁',
        'B': '⠃',
        'C': '⠉',
        'D': '⠙',
        'E': '⠑',
        'F': '⠋',
        'G': '⠛',
        'H': '⠓',
        'I': '⠊',
        'J': '⠚',
        'K': '⠅',
        'L': '⠇',
        'M': '⠍',
        'N': '⠝',
        'O': '⠕',
        'P': '⠏',
        'Q': '⠟',
        'R': '⠗',
        'S': '⠎',
        'T': '⠞',
        'U': '⠥',
        'V': '⠧',
        'W': '⠺',
        'X': '⠭',
        'Z': '⠵',
        ']': '⠻',
        '#': '⠼',
        'Y': '⠽',
        ')': '⠾',
        '=': '⠿'
    },

    ASCII = {
        '⠀': ' ',   // dot-0 to space bar
        '⠸': '_',
        '⠤': '-',
        '⠠': ',',
        '⠰': ';',
        '⠱': ':',
        '⠖': '!',
        '⠹': '?',
        '⠨': '.',
        '⠷': '(',
        '⠪': '[',
        '⠈': '@',
        '⠡': '*',
        '⠌': '/',
        '⠄': '\'',
        '⠐': '\"',
        '⠳': '\\',
        '⠯': '&',
        '⠩': '%',
        '⠘': '^',
        '⠬': '+',
        '⠣': '<',
        '⠜': '>',
        '⠫': '$',
      // TODO: add number indicator	⠼	3456
        '⠴': '0',
        '⠂': '1',
        '⠆': '2',
        '⠒': '3',
        '⠲': '4',
        '⠢': '5',
        '⠋': '6',
        '⠶': '7',
        '⠦': '8',
        '⠔': '9',
        '⠁': 'A',
        '⠃': 'B',
        '⠉': 'C',
        '⠙': 'D',
        '⠑': 'E',
        '⠋': 'F',
        '⠛': 'G',
        '⠓': 'H',
        '⠊': 'I',
        '⠚': 'J',
        '⠅': 'K',
        '⠇': 'L',
        '⠍': 'M',
        '⠝': 'N',
        '⠕': 'O',
        '⠏': 'P',
        '⠟': 'Q',
        '⠗': 'R',
        '⠎': 'S',
        '⠞': 'T',
        '⠥': 'U',
        '⠧': 'V',
        '⠺': 'W',
        '⠭': 'X',
        '⠵': 'Z',
        '⠻': ']',
        '⠼': '#',
        '⠽': 'Y',
        '⠾': ')',
        '⠿': '=',
    },

    CONTRACTIONS = {
        '⠮': 'the',
        '⠿': 'for',
        '⠯': 'and',
        '⠫': 'ed',
        '⠬': 'ing',
    };

Object.assign(ASCII, CONTRACTIONS)

var contractions = Object.keys(CONTRACTIONS);

var isConverted = function (character) {
    return !!ASCII.hasOwnProperty(character);
};

var replaceContractions = function (text) {
    for (var i = 0; i < contractions.length; i++) {
        var braille = contractions[i];
        var regex = new RegExp(CONTRACTIONS[braille], 'gi');
        text = text.replace(regex, braille);
    }
    return text;
};

module.exports = {
    convert: function (character) {
        return !!BRAILLE[character] ? BRAILLE[character] : '?';
    },

    read: function (symbol) {
        return !!ASCII[symbol] ? ASCII[symbol] : '?';
    },

    toBraille: function (text) {
        text = replaceContractions(text);
        var upperText, upperTextLength, brailleText, i;

        upperText = text.toUpperCase();
        upperTextLength = upperText.length;
        brailleText = '';

        for (i = 0; i < upperTextLength; i++) {
            var character = upperText[i]
            brailleText += isConverted(character)
                ? character
                : this.convert(character);
        }

        return brailleText;
    },

    toText: function (code) {
        var codeLength, asciiText, i;

        codeLength = code.length;
        asciiText = '';

        for (i = 0; i < codeLength; i++) {
            asciiText += this.read(code[i]);
        }

        return asciiText;
    }
};
