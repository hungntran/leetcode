/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
export const floodFill = function (image, sr, sc, color) {
  const currentColor = image[sr][sc];

  if (color === currentColor) {
    return image;
  }

  const m = image.length;
  const n = image[0].length;

  const fill = (row, col) => {
    if (
      row < 0 ||
      row >= m ||
      col < 0 ||
      col >= n ||
      image[row][col] !== currentColor
    )
      return;

    image[row][col] = color;

    fill(row - 1, col);
    fill(row + 1, col);
    fill(row, col - 1);
    fill(row, col + 1);
  };

  fill(sr, sc);
  return image;
};
