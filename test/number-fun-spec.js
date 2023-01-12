const {expect} = require('chai');
const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree', () => {
  it('should return 3', () => {
    expect(returnsThree()).to.equal(3);
  })
})
describe('reciprocal', () => {
  // 3 => 1/3
  context('number is not between 1 & 1000000', () => {
    it('should should throw an error', () => {
      let test1 = () => { reciprocal(0) }
      let test2 = () => { reciprocal(1000001) }

      expect( test1 ).to.throw(TypeError);
      expect( test2 ).to.throw(TypeError);
    })
  })
  context('number is between 1 & 1000000', () => {
    it('should return the reciprocal of input', () => {
      expect( reciprocal(15) ).to.equal(1/15);
      expect( reciprocal(20) ).to.equal(1/20);
      expect( reciprocal(25) ).to.equal(1/25);
      expect( reciprocal(30) ).to.equal(1/30);
    })
  })
})
