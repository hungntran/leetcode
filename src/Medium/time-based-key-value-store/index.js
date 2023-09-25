var TimeMap = function () {
  this.map = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.map.has(key)) {
    this.map.set(key, [{ value, timestamp }]);
  } else {
    const cur = this.map.get(key);
    cur.push({ value, timestamp });
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.map.has(key)) {
    return '';
  }

  const values = this.map.get(key);
  let output = '';
  let l = 0;
  let r = values.length - 1;

  while (l <= r) {
    const mid = l + parseInt((r - l) / 2);
    const source = values[mid];

    if (source.timestamp <= timestamp) {
      output = source.value;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return output;
};
/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
