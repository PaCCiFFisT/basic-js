const chainMaker = {
  arr: [],
  chain: '',
  getLength() {
    return this.arr.length
  },
  addLink(value = '') {
    this.arr.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (typeof position != 'number' || position <= 0 || position > this.arr.length) {
      this.arr = [];
      throw new Error
    } else {
      this.arr.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.arr.reverse();
    return this
  },
  finishChain() {
    this.chain = this.arr.join('~~')
    this.arr = [];
    return this.chain
  }
};


module.exports = chainMaker;
