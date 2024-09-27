var MyCalendarTwo = function () {
  this.nonOverlap = []
  this.overlap = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  for (const [s, e] of this.overlap) {
    if (!(end <= s || start >= e)) {
      return false
    }
  }

  for (const [s, e] of this.nonOverlap) {
    if (end > s && e > start) {
      this.overlap.push([Math.max(s, start), Math.min(end, e)])
    }
  }

  this.nonOverlap.push([start, end])
  return true
}

/**
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */
