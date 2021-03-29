module.exports = class DepthCalculator {
  constructor() {
    this.tmp = 1
  }
  calculateDepth(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.tmp++
        return this.calculateDepth(arr.flat(1))
      }
    }
    let solution = this.tmp
    this.tmp = 1;
    return solution;
  }
};