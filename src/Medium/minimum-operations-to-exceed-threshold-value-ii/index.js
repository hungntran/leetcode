/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function (nums, k) {
    const pq = new MinPriorityQueue()

    for (const num of nums) {
        pq.enqueue(num)
    }

    let count = 0

    while (pq.front().element < k) {
        const num1 = pq.dequeue().element
        const num2 = pq.dequeue().element

        pq.enqueue(num1 * 2 + num2)
        count += 1
    }

    return count
}
