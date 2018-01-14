var questionForm = document.getElementById('question');

question.addEventListener('submit', function(e) {
  e.preventDefault();

  var inputElement = document.getElementById('phrase');
  var phrase = inputElement.value;

  var wordList = phrase.split(' ');

  var translatedWordList = wordList.map(pigLatin.translateWordToPigLatin);

  var newPhrase = translatedWordList.join(' ');

  var outputElement = document.getElementById('answer');
  outputElement.innerHTML = newPhrase;
});
