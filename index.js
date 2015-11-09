/**
 * braille
 * https://github.com/Nonemoticoner/braille
 *
 * Copyright (c) 2015 Nonemoticoner
 * Licensed under the MIT license.
 */

module.exports = {
	sets: {
		ascii: " A1B\'K2L@CIF/MSP\"E3H906R^DJG>NTQ,*5<-U8V.%[$+X!&;:4\\0Z7(_?W]#Y)=",
		dot6:  "⠀⠁⠂⠃⠄⠅⠆⠇⠈⠉⠊⠋⠌⠍⠎⠏⠐⠑⠒⠓⠔⠕⠖⠗⠘⠙⠚⠛⠜⠝⠞⠟⠠⠡⠢⠣⠤⠥⠦⠧⠨⠩⠪⠫⠬⠭⠮⠯⠰⠱⠲⠳⠴⠵⠶⠷⠸⠹⠺⠻⠼⠽⠾⠿"
	},

	// converts character to Braille symbol
	convert: function (character) {
		var sign = undefined;

		//
		for (var i = this.sets.ascii.length - 1; i >= 0; i--) {
			if(this.sets.ascii[i] == character){
				sign = this.sets.dot6[i];
			}
		}
		
		// if not found will return undefined
		return sign;
	}
	
};
