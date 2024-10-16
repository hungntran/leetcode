/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const pq = new MaxPriorityQueue({
        priority: (e) => e.length,
    })

    pq.enqueue('a'.repeat(a))
    pq.enqueue('b'.repeat(b))
    pq.enqueue('c'.repeat(c))

    let res = ''

    while (!pq.isEmpty()) {
        let top = pq.dequeue().element

        if (top.length === 0) {
            break
        }

        if (res.at(-1) === top.at(-1)) {
            const secondTop = pq.dequeue().element

            if (secondTop.length === 0) {
                break
            }

            res += secondTop.slice(-1)
            pq.enqueue(secondTop.slice(0, -1))
            pq.enqueue(top)
        } else {
            res += top.slice(-2)
            pq.enqueue(top.slice(0, -2))
        }
    }

    return res
}
