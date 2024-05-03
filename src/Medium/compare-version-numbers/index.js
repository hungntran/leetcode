/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const v1 = version1.split('.').map(Number)
  const v2 = version2.split('.').map(Number)

  const n = Math.max(v1.length, v2.length)

  let i = 0

  while (i < n) {
    v1[i] = v1[i] || 0
    v2[i] = v2[i] || 0

    if (v1[i] > v2[i]) return 1
    if (v1[i] < v2[i]) return -1

    i++
  }

  return 0
}
