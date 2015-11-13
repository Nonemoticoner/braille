# braille
A Node module for converting text to Braille alphabet.

#### Installation
```bash
$ npm install braille
```

#### How to use
Very simple in use with text (string) as argument:
```js
var br = require('braille');

var code = br.toBraille('EXAMPLE TEXT 123'); //  ⠑⠭⠁⠍⠏⠇⠑⠀⠞⠑⠭⠞⠀⠂⠆⠒

var text = br.toText('⠁⠝⠕⠞⠓⠑⠗⠀⠺⠕⠗⠙'); //  ANOTHER WORD
```
Currently only six dot Braille notation is supported.

#### License
MIT
