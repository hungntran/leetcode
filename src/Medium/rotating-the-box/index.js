/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
    const m = box.length
    const n = box[0].length
    const output = new Array(n).fill(0).map((e) => new Array(m))

    for (let i = 0; i < m; i++) {
        let count = 0

        for (let j = 0; j < n; j++) {
            switch (box[i][j]) {
                case '*':
                    update(count, j, box[i])
                    count = 0
                    break
                case '#':
                    box[i][j] = '.'
                    count += 1
                    break
            }
        }

        update(count, n, box[i])
    }

    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            output[col][m - row - 1] = box[row][col]
        }
    }

    return output
}

function update(count, e, box) {
    while (count > 0) {
        box[e - count] = '#'
        count -= 1
    }
}
