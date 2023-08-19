/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  if (str2.length > str1.length) {
    return false;
  }

  let index = 0;
  let temp = '';

  for (const char of str2) {
    while (index < str1.length) {
      if (str1[index] === char || incrementCyclically(str1[index]) === char) {
        index++;
        temp += char;
        break;
      }

      index++;
    }
  }

  return temp.length === str2.length;
};

const incrementCyclically = (character) => {
  if (character === 'z') {
    return 'a';
  }

  return String.fromCharCode(character.charCodeAt(0) + 1);
};
