/**
 * @param {string} s
 * @return {string}
 */
export const reverseVowels = function (s) {
  const arr = s.split('');
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const isVowel = {
      left: vowels.has(arr[left]),
      right: vowels.has(arr[right]),
    };

    if (isVowel.left && isVowel.right) {
      [arr[right], arr[left]] = [arr[left], arr[right]];
      left++;
      right--;
      continue;
    }

    if (!isVowel.left) {
      left++;
    }

    if (!isVowel.right) {
      right--;
    }
  }

  return arr.join('');
};

const vowels = new Set(['u', 'e', 'o', 'a', 'i', 'U', 'E', 'O', 'A', 'I']);
