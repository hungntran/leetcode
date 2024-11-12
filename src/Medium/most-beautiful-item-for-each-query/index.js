/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
    const maxBeauty = {}

    for (const item of items) {
        const [price, beauty] = item

        if (maxBeauty[price] == null) {
            maxBeauty[price] = beauty
        } else {
            maxBeauty[price] = Math.max(maxBeauty[price], beauty)
        }
    }

    let prev

    const arr = Object.entries(maxBeauty)
        .sort((a, b) => a[0] - b[0])
        .map(([key, value]) => {
            if (prev == null) prev = value
            else prev = Math.max(prev, value)
            return [+key, prev]
        })

    const result = []

    for (const q of queries) {
        result.push(findMaxBeauty(q))
    }

    return result

    function findMaxBeauty(price) {
        let l = 0,
            r = arr.length - 1

        while (l <= r) {
            const mid = Math.floor((l + r) / 2)

            if (arr[mid][0] === price) {
                return arr[mid][1]
            }

            if (arr[mid][0] < price) {
                l = mid + 1
            } else {
                r = mid - 1
            }
        }

        return arr[l - 1]?.[1] || 0
    }
}
