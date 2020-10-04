const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if (position >= 1 && position <= this.chain.length){
      this.chain.splice(position - 1, 1);
      return this;
    } else {
      this.chain = [];
      throw new Error()
    }
  },
  reverseChain() {
      this.chain.reverse();
      return this;
  },
  finishChain() {
      let output = `( ${this.chain.join(' )~~( ')} )`;
      this.chain = [];
      return output;
  }
  
};

module.exports = chainMaker;
