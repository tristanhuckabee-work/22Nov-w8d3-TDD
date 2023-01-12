const {expect} = require('chai');
const {returnsThree, reciprocal} = require('../problems/number-fun');

describe('returnsThree', function() {
  it('should return 3', () => {
    expect( returnsThree() ).to.equal(3);
  })
});
describe('reciprocal', function() {
  context('when called with valid argument', function () {
    it('should return the reciprocal of the input', () => {
      expect( reciprocal(2) ).to.equal(2)  //2
      expect( reciprocal(3) ).to.equal(6)  //6
      expect( reciprocal(4) ).to.equal(24) //24
    })
  })
  context('when called with invalid arguments', function() {
    it('number is less 1', () => {
      expect(()=>{ reciprocal(-1) }).to.throw(TypeError);
    })
    it('number is greater than 1000000', () => {
      expect(() => {reciprocal(1000001)}).to.throw(TypeError);
    })
  })
})