# piglatin

A simple JavaScript implementation of a source language-to-Pig Latin translator.

## Install

### Installing as a Module

To use on the server, or as a CommonJS or ES6 import that gets bundled in a build process, install this package using your package manager.

```
npm install piglatin
```

Then, to include the CommonJS version, simple require the UMD version from the `/dist/` folder.

```
var pigLatin = require('piglatin');
```

If you can use ES6 imports, then import the version from the `/lib/` folder.

```
import pigLatin from 'lib/piglatin/piglatin';
```

### Using on a webpage

If you don’t use a build process, and you just want to include this directly on a webpage, simple download the UMD module file in the `/dist/` folder, and include that in a `<script>` tag on your page. Be sure to include the path to any subfolder where you put that file in the `src` attribute.

```
<script type="text/javascript" src="piglatin.js"></script>
```

## Usage

Currently, this package only exposes one method, **translateWordToPigLatin**.

If you imported the UMD module, this will be a method on the `pigLatin` object. (If you are using ES6 imports, you could use a named import to only use that method.)

This function takes a string as its only argument, and it returns that string in Pig Latin.

```
var pigWord = pigLatin.translateWordToPigLatin('Pig');
console.log(pigWord);                                  // ==> prints 'Igpay'
```

Notice that the case of the word to be translated is preserved.

## Example app

Look at the `index.html` in the root of the GitHub repo for an example webpage that uses this package.
