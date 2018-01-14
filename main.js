(function() {
  var questionForm = document.getElementById('question');

  question.addEventListener('submit', function(e) {
    e.preventDefault();

    var inputElement = document.getElementById('phrase');
    var phrase = inputElement.value;

    var wordList = phrase.split(' ');

    var translatedWordList = wordList.map(translateWordToPigLatin);

    var newPhrase = translatedWordList.join(' ');

    var outputElement = document.getElementById('answer');
    outputElement.innerHTML = newPhrase;
  });

  function translateWordToPigLatin(word) {
    var punctuation = '';
    if (!word.slice(-1).match(/[a-z]/i)) {
      punctuation = word.slice(-1);
      word = word.slice(0, word.length - 1);
    };
    var isCapital = (word.charCodeAt(0) < 97) ? true : false;
    var initialSound = '';

    var currentLetter = word.slice(0, 1).toLowerCase();
    while (currentLetter !== 'a' &&
           currentLetter !== 'e' &&
           currentLetter !== 'i' &&
           currentLetter !== 'o' &&
           currentLetter !== 'u' &&
           (currentLetter !== 'y' || !initialSound.length)
          ) {
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
})();
