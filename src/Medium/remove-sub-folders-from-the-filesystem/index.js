/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
    const set = new Set(folder)
    const res = []

    for (const f of folder) {
        let isSubFolder = false
        let prefix = f

        while (prefix !== '') {
            let pos = prefix.lastIndexOf('/')

            if (pos === -1) {
                break
            }

            prefix = prefix.slice(0, pos)

            if (set.has(prefix)) {
                isSubFolder = true
                break
            }
        }

        if (!isSubFolder) {
            res.push(f)
        }
    }

    return res
}
