/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
    while (1) {
        const product = n.toString().split('').reduce((a, b) => +a * +b);
        if (product % t === 0) {
            return n
        }

        n++
    }
};
