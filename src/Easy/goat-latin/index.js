/**
 * @param {string} sentence
 * @return {string}
 */
var toGoatLatin = function (sentence) {
  return sentence
    .split(' ')
    .map((word, index) => {
      if (vowels.includes(word[0].toLowerCase())) {
        return word + 'ma' + 'a'.repeat(index + 1);
      }

      return word.slice(1) + word[0] + 'ma' + 'a'.repeat(index + 1);
    })
    .join(' ');
};

const vowels = 'ueoai';
