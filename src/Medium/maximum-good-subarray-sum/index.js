/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumSubarraySum = function (nums, k) {
  const map = new Map()
  let sum = 0
  let output = -Infinity

  for (const num of nums) {
    sum += num

    if (map.has(num - k)) {
      output = Math.max(output, sum - map.get(num - k))
    }

    if (map.has(num + k)) {
      output = Math.max(output, sum - map.get(num + k))
    }

    if (map.has(num)) {
      map.set(num, Math.min(map.get(num), sum - num))
    } else {
      map.set(num, sum - num)
    }
  }

  return output === -Infinity ? 0 : output
}

console.time('test')
const a = maximumSubarraySum(
  [
    -31, -49, 35, -68, -16, 91, -7, -77, 6, 66, -23, 74, 93, 72, -57, 96, 94,
    51, 83, 60, -14, -49, 30, -59, 48, -59, 31, -33, 42, -30, -66, 14, -27, 37,
    -96, 17, -89, 21, -38, -54, 9, 67, 53, 80, 39, -34, 84, 40, 67, -91, -51,
    93, 22, -88, 1, -87, -87, -69, 78, 1, -67, 49, 48, -92, 17, 10, -2, 8, -57,
    -93, -51, 84, -8, 47, 47, -95, 75, -1, -8, 88, -23, 29, -45, 81, 94, -82,
    -19, -18, -65, 95, -73, -25, -38, -68, 66, -4, 61, -24, 36, 88, 83, 16, -64,
    55, -78, -64, -1, -52, -54, 67, 98, 81, -13, 93, -42, 19, -76, 26, -72, 26,
    1, -91, 7, 40, 32, -73, 8, -6, -49, 92, -29, 69, 3, -47, -56, 31, 93, 91,
    86, -54, 46, 88, 34, -35, -23, -72, -23, 25, 44, 52, 13, 6, -60, 40, -31,
    80, -79, -91, -11, 31, 16, 39, 14, 41, 6, 44, -97, 11, 82, -53, -29, 34, -4,
    -59, 13, 65, -88, -93, -39, 40, -28, -24, 71, 68, 89, 37, 37, -19, 35, 36,
    -78, 41, -89, 79, 84, 73, 59, 54, -34, -1, 9, 49, 18, -73, 63, -13, -93,
    -52, -82, -23, -40, 46, -53, -12, -92, -46, 91, -28, 42, -98, 55, -66, -95,
    61, -14, 80, 16, -37, 94, 20, -15, -63, 81, 12, 23, -20, -93, -78, 92, 62,
    -78, -2, 34, -58, -96, 69, 91, -61, 46, 75, 41, 75, -58, -14, 71, -10, 38,
    43, 61, 80, -72, 68, 4, -38, 64, 78, -93, 9, -36, 48, -12, 51, -3, -99, 34,
    -45, -16, -61, 20, 76, 100, 22, -55, -84, -19, 50, 6, -34, 29, -36, 41, -82,
    -9, 46, -91, 17, -99, 44, 91, 0, -53, -89, -96, 12, -68, 73, -86, -75, 6,
    -100, 60, 82, 24, -89, -16, 37, -93, 97, 54, 10, 65, -6, -50, 95, -15, 84,
    66, 90, 57, 77, 54, 96, -40, 0, 11, 69, -81, -91, 23, -70, -58, 43, 78, -16,
    61, 86, 60, 78, 44, -83, 81, 36, -62, -31, 96, 99, -83, -78, -90, 31, 81,
    88, 50, 16, 24, 48, -15, -31, 41, 35, -41, 60, 92, -9, 43, 77, -96, -18,
    -75, -83, 9, 46, -29, 50, 21, 39, -42, -43, -16, -2, 65, -90, -48, 63, -79,
    -61, 25, -97, -75, -35, 6, -53, 33, 82, 2, 18, 12, -7, 58, -40, 19, 49, 50,
    -69, 8, -61, 93, -31, -55, -22, -47, -68, -38, 16, -70, 6, -24, -14, 4, -3,
    65, 54, -85, -83, -40, -50, 63, -38, 15, -47, -67, -54, -25, 79, 46, 65,
    -10, -5, 33, 78, 49, 54, 92, 31, 26, 65, 61, -50, 14, 39, 100, -49, 78, 90,
    -44, 66, -70, -37, -1, 98, -56, 63, -28, 40, 73, 22, 90, -46, -13, 4, -78,
    -68, 81, 85, -100, -23, -48, -76, 77, 2, -43, -58, -75, -34, -48, -10, 76,
    -44, -9, 9, 27, 61, 100, -68, 5, -86, 9, -75, -63, 57, 49, -86, 3, -91, 50,
    -98, 14, 4, 76, 72, 5, 21, -71, 95, 38, 60, -59, -97, 12, 38, 49, 22, 67,
    -44, -73, 52, -23, 16, -35, -62, 96, -17, -23, 34, 25, 46, 47, 28, 84, 67,
    61, 19, -86, 90, 69, 22, 46, 24, -49, 56, -44, 45, -27, -50, 72, 48, 35,
    -44, 86, 34, 77, 8, 93, 92, -30, -3, 77, 53, 74, 34, -57, -5, -46, -89, 34,
    15, 71, 26, 51, 3, -95, -72, -59, 56, 67, -19, 95, -67, 41, -77, -42, 96,
    93, -26, -27, 19, 29, 13, -93, 14, 59, 44, 32, 55, 46, -100, 52, -57, 60,
    100, -69, -99, -72, -16, -55, -28, 7, 35, 76, 45, -67, 59, -32, 69, 39, 75,
    50, -59, -79, -77, 56, 37, 13, -98, 35, 98, -69, -61, -31, -36, -92, -1, 18,
    -71, 29, 1, 51, 3, -5, 52, 19, -41, -30, 67, -26, 53, 25, -74, 100, 72, -2,
    21, -29, -41, -52, -100, 57, 88, 73, 8, 82, -87, 65, 1, -33, -52, -97, 39,
    3, -15, -17, 52, -14, -5, -30, -5, 15, -34, 42, 42, 45, -3, -43, -49, 13,
    -42, 24, -88, -18, 24, 27, -1, -62, -63, -15, 88, -63, 100, 5, -68, -49, 4,
    34, 75, -3, -78, 3, -54, 16, 8, 97, 74, 12, 96, 89, -19, -87, 29, -89, 13,
    79, -3, -100, -14, 91, 91, -38, -33, 45, 71, -37, 90, 63, -36, -63, -20,
    -47, -50, 38, -83, -95, -85, -5, 10, 80, -78, -2, 30, 95, 12, -44, 47, -100,
    4, 17, 27, -82, 23, -62, 7, 10, -30, -78, -91, 99, 66, 6, 9, 79, -11, 64,
    -35, 77, -24, -78, -91, -6, -23, -69, 49, -17, -21, -62, 11, 6, -21, 12, 45,
    37, 51, -59, 9, -47, 28, -100, 12, 55, -47, 6, -67, -12, -1, 13, -36, 67,
    -34, -97, 47, -99, -9, 93, -100, 92, 54, -61, 45, 62, -34, 24, -9, -49, -43,
    62, 80, -62, -16, 29, 26, -27, 98, -82, 34, -24, 73, -21, -42, -90, 1, -88,
    -87, 24, 3, -96, -56, 12, 84, -21, -84, -80, 21, -98, 55, -32, 47, 95, 29,
    -4, -78, -48, 41, 88, -54, 90, -45, 14, 94, 92, -42, -58, 76, 60, 47, 77,
    -76, -1, -30, 55, -38, 50, 68, 37, 66, -90, 83, -29, -17, 24, -67, 95, 25,
    -2, -47, 9, -95, -36, 69, 88, -12, -90, 28, -33, 16, -18, -27, -72, 25, 7,
    12, 6, -30, 3, -83, 68, 8, 27, -7, -40, 63, -67, 51, -57, 90, -41, -16, 4,
    96, -96, -74, -74, 76, 34, -88, -67, 6, 67, 50, -46, -15, -5, 16, -84, 79,
    -61, 88, -70, 36, -87, -24, 89, 37, 97, -91, -45, -39, -54, -26, -35, -41,
    -59, -94, -23, 47, 94, -51, -25, 74, 38, 87, 66, 80, 86, 65, -10, -6, 52,
    -79, -41, 69, 70, -92,
  ],
  16
)
console.log(a)
console.timeEnd('test')

// [1,2,3,4,5,6]
// 1
// [-1,3,2,4,5]
// 3
// [-1,-2,-3,-4]
// 2
// [-991,-473,-698,-969,-171,-708,-847,-896,-975,-792,-757,-817,-124,-506,-359,-962,-145,-407,-969,-454,-891,-438,-198,-857,-520,-764,-216,-220,-121,-367,-404,-362,-197,-242,-268,-377,-595,-142,-756,-565,-452,-887,-489,-615,-898,-586,-951,-497,-282,-438,-209,-275,-722,-227,-666,-298,-749,-101,-321,-419,-123,-194,-277,-818,-396,-169,-428,-109,-520,-273,-606,-183,-621,-432,-533,-387,-857,-852,-398,-921,-421,-620,-486,-168,-942,-163,-394,-711,-761,-652,-887,-328,-126,-585,-100,-867,-898,-151,-356,-662]
// 75
// [-39,14,44,-74,71,69,-22,-83,74,33,-25,14,-60,66,65,53,-100,61,2,18,72,-21,-84,-63,-65,-81,94,-86,23,92,2,88,82,-45,-2,76,50,-11,-79,-86,19,-50,-34,-89,-59,15,73,-90,21,-71,-42,-19,31,-11,56,81,87,17,14,31,62,23,-33,2,-83,-93,-98,72,97,-67,6,-34,-97,63,-98,74,29,-73,-95,-74,89,-53,-88,41,49,14,53,86,-95,-91,27,21,56,-71,3,-7,-12,-84,-95,-1,-3,-33,82,-43,-100,32,-28,43,-67,-69,-50,73,70,15,63,-81,-80,-27,79,63,-87,-19,-74,-77,-86,38,94,-6,-35,-49,22,-53,23,-19,-94,80,-12,-15,0,98,-3,-62,-31,54,-11,97,-46,2,56,2,16,47,-17,7,86,-56,-65,-88,-4,53,-22,38,-75,-30,-96,3,-27,-61,95,79,-20,34,44,-70,-72,36,-90,75,52,19,1,98,22,47,88,-40,41,46,-15,90,70,72,47,-33,51,-94,-22,38,-86,-80,-15,-75,70,99,-97,-20,89,-26,-83,-24,60,29,-66,-86,-76,-34,99,54,24,-73,-76,-27,37,-48,45,-60,14,0,-80,41,70,-52,-95,-69,-87,-36,69,100,-16,-49,44,-20,85,37,-73,-53,-26,-23,33,2,4,10,-28,17,-29,-41,-41,70,-68,-68,41,12,57,-100,27,72,-63,-36,-57,-23,-80,12,-97,-77,-92,52,62,-9,-26,-44,-9,59,40,83,-96,21,54,-97,-20,11,43,82,-54,2,38,91,65,-69,38,53,-46,-97,-25,38,-89,-53,40,-14,-49,-22,-56,-97,-28,-25,-33,44,-63,-85,-41,50,40,99,22,-22,73,93,8,21,93,-38,-49,91,75,-10,78,7,-51,93,23,-48,-55,-80,99,-6,-18,68,-71,-89,68,-70,94,3,-93,-32,-91,53,85,-5,54,-52,-21,1,24,-82,-84,24,73,-82,40,-91,-86,20,67,-80,-70,2,98,-46,21,-50,68,97,23,13,-93,5,-72,-44,2,-72,91,61,-10,-62,6,12,47,-10,38,76,-59,-73,-13,78,-65,98,98,-4,90,50,-72,-50,-90,-21,-21,-44,-23,-76,0,-5,83,33,98,-86,-94,-37,-99,-34,95,-10,35,11,87,34,95,7,-65,-43,-24,-100,-64,-41,49,14,29,96,63,88,-46,-50,78,17,-4,49,-9,-40,-54,-43,38,-40,-39,31,72,-20,90,-22,68,32,54,-95,-52,55,15,-67,48,-20,-3,-94,-51,89,-85,46,-67,14,-11,-90,-41,-82,-10,-60,30,22,-79,78,-76,-72,-66,23,15,36,95,-59,59,98,-85,27,81,43,7,39,27,-86,0,4,20,-4,41,62,-80,88,-5,2,-89,20,-34,-73,-17,86,-53,5,23,-77,-4,37,73,10,65,-71,-93,-79,-32,0,21,-48,15,-78,7,91,36,-15,35,37,61,-41,86,-48,-56,-72,39,12,29,74,-53,56,-63,86,-8,85,76,61,-18,24,76,17,-6,43,-47,-65,95,-27,-7,-34,44,-37,8,-5,-10,-73,-62,11,-10,27,16,-13,-79,-23,75,49,93,67,-83,-90,18,-16,99,-77,80,89,92,5,-24,-48,96,-83,84,43,84,50,-15,3,4,-48,-79,85,10,-76,70,23,51,-6,76,27,-44,34,31,20,-26,-99,85,29,21,26,-24,-72,-51,-98,34,28,94,-71,-71,68,85,92,-67,97,-57,-75,-35,49,13,-81,-91,-28,-79,7,9,-82,-70,50,61,-53,-75,-1,63,-71,3,-76,-9,-83,47,15,-31,-92,44,46,-92,15,-40,62,-19,48,-37,-82,7,35,-1,-36,13,-37,78,79,-20,23,60,6,4,26,-11,-73,-83,57,67,-16,18,-29,84,100,51,62,57,-82,10,92,-50,8,-26,-8,6,-21,46,-56,-15,16,-8,-15,43,61,-51,67,-69,47,28,-32,-52,16,46,68,0,47,6,-71,42,-63,41,-15,-95,75,91,-32,-76,95,-89,87,-99,37,87,23,-47,-41,-22,-23,72,88,-45,-78,-51,-39,94,-97,79,72,-94,30,6,-12,-51,-41,68,98,61,-82,-91,94,-96,52,-46,-9,20,35,59,50,88,33,-28,70,-72,4,69,-43,52,-66,52,25,13,9,-42,3,69,12,-39,35,-20,-39,93,2,-29,2,16,72,93,-67,90,-48,95,-100,52,-76,-55,-75,21,-6,-88,-90,-63,-81,29,34,8,2,27,19,65,25,64,89,27,-3,1,43,-31,-32,25,-41,-46,38,60,-22,93,32,89,88,42,59,66,34,-19,88,11,11,22,-51,-49,77,-73,-34,-18,94,-87,-12,-61,-97,80,23,-16,-39,-37,43,85,-100,47,44,-78,-57,-10,29,88,-69,-9,-56,73,15,-95,13,89,23,-47,-43,88,98,16,-11,-62,-100,-31,83,-80,-49,-37,72,-56,29,-82,33,42,-41,76,-41,79,34,54,-10,27,62,-57,35,86,16,-34,-64,-65,-7,-53,45,-83,5,93,99,80,-53,-25,48,58,96,-68,-91,-37,-95,92,-86,30,25,56,82,-9,-3,-99,25,-21,-67,68,23,66,-8,51,-7,-62,-56,-33,2,95,21,80,44,-16,-60,10,66,74,99]
// 19
