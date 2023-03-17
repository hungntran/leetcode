/**
 * @param {string[]} words
 * @return {string[]}
 */
export const commonChars = function (words) {
  words.sort((a, b) => a.length - b.length);

  const res = [];
  let pickedWord = words[0];
  for (const c of pickedWord) {
    let flag = true;

    for (let i = 1; i < words.length; i++) {
      if (!words[i].includes(c)) {
        flag = false;
        break;
      }

      words[i] = words[i].replace(c, '');
    }

    if (flag) {
      res.push(c);
    }
  }

  return res;
};
