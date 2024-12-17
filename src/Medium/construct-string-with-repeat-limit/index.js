/**
 * @param {string} s
 * @param {number} repeatLimit
 * @return {string}
 */
var repeatLimitedString = function (s, repeatLimit) {
    const pq = new MaxPriorityQueue({
        priority: (item) => item.char.charCodeAt(0),
    })
    const letters = new Array(26).fill(0)

    for (const c of s) {
        letters[calcCharIndex(c)] += 1
    }

    for (let i = 25; i >= 0; i--) {
        if (letters[i] === 0) continue
        pq.enqueue({ char: String.fromCharCode(i + 97), freq: letters[i] })
    }

    let res = ''
    let hold = null

    while (!pq.isEmpty()) {
        const top = pq.dequeue().element
        let hasHold = hold !== null

        if (hasHold) {
            pq.enqueue(hold)
            hold = null
        }

        if (hasHold) {
            top.freq -= 1
            res += top.char
            top.freq > 0 && pq.enqueue(top)
            continue
        }

        if (top.freq > repeatLimit) {
            top.freq -= repeatLimit
            res += top.char.repeat(repeatLimit)
            hold = top
        } else {
            res += top.char.repeat(top.freq)
        }
    }

    return res
}

function calcCharIndex(c) {
    return c.charCodeAt(0) - 97
}
