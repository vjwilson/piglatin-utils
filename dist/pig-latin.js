(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.pigLatin = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.translateWordToPigLatin = translateWordToPigLatin;
  function translateWordToPigLatin(word) {
    var punctuation = '';
    if (!word.slice(-1).match(/[a-z]/i)) {
      punctuation = word.slice(-1);
      word = word.slice(0, word.length - 1);
    };
    var isCapital = word.charCodeAt(0) < 97 ? true : false;
    var initialSound = '';

    var currentLetter = word.slice(0, 1).toLowerCase();
    while (currentLetter !== 'a' && currentLetter !== 'e' && currentLetter !== 'i' && currentLetter !== 'o' && currentLetter !== 'u' && (currentLetter !== 'y' || !initialSound.length)) {
      initialSound += currentLetter;
      word = word.slice(1);
      currentLetter = word.slice(0, 1).toLowerCase();
    }

    if (isCapital) {
      word = word[0].toUpperCase() + word.slice(1);
    }

    word = word + initialSound.toLowerCase() + 'ay' + punctuation;

    return word;
  }
});
