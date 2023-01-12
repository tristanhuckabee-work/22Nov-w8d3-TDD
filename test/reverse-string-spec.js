const {expect} = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString', () => {
  it('should return the input string in reverse', () => {
    // const res = reverseString('fun');
    expect(reverseString('fun')).to.equal('nuf');
  });
  it('should throw an error if input is not a string', () => {
    let badFunc  = () => { reverseString(42) }
    let badFunc1 = () => { reverseString(null) }
    let badFunc2 = () => { reverseString({}) }
    
    expect( badFunc  ).to.throw(TypeError);
    expect( badFunc1 ).to.throw(TypeError);
    expect( badFunc2 ).to.throw(TypeError);
  });
})