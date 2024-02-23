/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  const map = {}

  for (const [from, to, price] of flights) {
    if (map[from] == null) {
      map[from] = []
    }

    map[from].push([to, price])
  }

  const dist = new Array(n).fill(Infinity)
  dist[src] = 0

  const queue = [[src, 0]]
  let cp = 0

  while (queue.length > 0 && cp <= k) {
    const size = queue.length

    for (let i = 0; i < size; i++) {
      const [cur, curPrice] = queue.shift()

      if (map[cur] == null) {
        continue
      }

      for (const [to, price] of map[cur]) {
        if (curPrice + price >= dist[to]) {
          continue
        }

        dist[to] = price + curPrice
        queue.push([to, dist[to]])
      }
    }

    cp += 1
  }

  return dist[dst] === Infinity ? -1 : dist[dst]
}
