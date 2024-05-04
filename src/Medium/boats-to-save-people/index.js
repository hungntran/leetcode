/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b)

  let boats = 0

  while (people.length > 0) {
    const person = people.pop()

    if (person + people[0] <= limit) {
      people.shift()
    }

    boats += 1
  }

  return boats
}
