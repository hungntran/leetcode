/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function (n, edges, source, destination) {
  if (n === 1) {
    return true
  }

  const graph = {}

  for (const edge of edges) {
    const [u, v] = edge

    if (graph[u] == null) {
      graph[u] = new Set()
    }

    graph[u].add(v)

    if (graph[v] == null) {
      graph[v] = new Set()
    }

    graph[v].add(u)
  }

  const visited = new Set()
  let queue = Array.from(graph[source])

  while (queue.length > 0) {
    const vertex = queue.shift()

    if (visited.has(vertex)) {
      continue
    }

    if (vertex === destination) {
      return true
    }

    visited.add(vertex)
    queue = queue.concat(Array.from(graph[vertex]))
  }

  return false
}
