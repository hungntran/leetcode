/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isIsomorphic = function (s, t) {
  const mapS2T = {};
  const mapT2S = {};

  for (let i = 0; i < s.length; i++) {
    if (mapS2T[s[i]] == null && mapT2S[t[i]] == null) {
      mapS2T[s[i]] = t[i];
      mapT2S[t[i]] = s[i];
    }

    if (mapS2T[s[i]] != t[i] && mapT2S[t[i]] != s[i]) {
      return false;
    }
  }

  return true;
};
