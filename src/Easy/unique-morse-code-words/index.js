/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
  const set = new Set();

  for (const word of words) {
    let morse = '';

    for (const char of word) {
      morse += morseCodes[char.charCodeAt(0) - 97];
    }

    set.add(morse);
  }

  return set.size;
};

const morseCodes = [
  '.-',
  '-...',
  '-.-.',
  '-..',
  '.',
  '..-.',
  '--.',
  '....',
  '..',
  '.---',
  '-.-',
  '.-..',
  '--',
  '-.',
  '---',
  '.--.',
  '--.-',
  '.-.',
  '...',
  '-',
  '..-',
  '...-',
  '.--',
  '-..-',
  '-.--',
  '--..',
];
