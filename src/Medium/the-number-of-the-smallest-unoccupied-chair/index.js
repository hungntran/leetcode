/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function (times, targetFriend) {
    const sorted = times
        .map((e, i) => ({ arrival: e[0], leaving: e[1], index: i }))
        .sort((a, b) => a.arrival - b.arrival)

    const usedChairs = new MinPriorityQueue({
        priority: (chair) => chair[0]
    })
    const availableChairs = new MinPriorityQueue({
        priority: x => x
    })

    for (let i = 0; i < times.length; i++) {
        availableChairs.enqueue(i)
    }

    for (const { arrival, leaving, index } of sorted) {
        while (!usedChairs.isEmpty() && usedChairs.front().element[0] <= arrival) {
            const chair = usedChairs.dequeue().element[1]
            availableChairs.enqueue(chair)
        }

        const chairIndex = availableChairs.dequeue().element
        usedChairs.enqueue([leaving, chairIndex])

        if (index === targetFriend) {
            return chairIndex
        }
    }

    return 0
};
