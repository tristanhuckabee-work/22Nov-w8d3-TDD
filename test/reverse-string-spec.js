const {expect} = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString()', function() {
  it('should return the string reversed', () => {
    expect( reverseString('fun') ).to.equal('nuf');
  });
  it('should throw an error for non-strings', () => {
    let badVal = () => { reverseString(42) };
    let goodVal =() => { reverseString('calf') };

    expect( badVal ).to.throw(TypeError);
    expect( goodVal ).to.not.throw(TypeError);
  });
});