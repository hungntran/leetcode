/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  return image.map((row) => {
    return row.reverse().map((value) => (value ? 0 : 1));
  });
};
