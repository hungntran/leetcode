/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
	if (s1.length > s2.length) {
		return false
	}

	const size = s1.length
	const arr1 = new Array(26).fill(0)
	const arr2 = new Array(26).fill(0)
	const A_CHARCODE = 'a'.charCodeAt()

	for (let i = 0; i < s1.length; i++) {
		arr1[s1[i].charCodeAt(0) - A_CHARCODE] += 1
		arr2[s2[i].charCodeAt(0) - A_CHARCODE] += 1
	}

	for (let i = 0; i < s2.length - size; i++) {
		if (matches(arr1, arr2)) {
			return true
		}

		arr2[s2[i + size].charCodeAt(0) - A_CHARCODE] += 1
		arr2[s2[i].charCodeAt(0) - A_CHARCODE] -= 1
	}

	return matches(arr1, arr2)
}

function matches(arr1, arr2) {
	for (let i = 0; i < 26; i++) {
		if (arr1[i] !== arr2[i]) {
			return false
		}
	}

	return true
}
