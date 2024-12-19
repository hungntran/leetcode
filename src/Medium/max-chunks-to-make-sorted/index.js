/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    const n = arr.length
    const prefixMax = [...arr]
    const suffixMin = [...arr]

    for (let i = 1; i < n; i++) {
        prefixMax[i] = Math.max(prefixMax[i - 1], prefixMax[i])
    }

    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(suffixMin[i + 1], suffixMin[i])
    }

    let chunk = 0

    for (let i = 0; i < n; i++) {
        if (i === 0 || suffixMin[i] > prefixMax[i - 1]) {
            chunk += 1
        }
    }

    return chunk
};
