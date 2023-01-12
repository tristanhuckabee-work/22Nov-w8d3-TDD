const {expect} = require('chai');
const reverseString = require('../problems/reverse-string');

describe('reverseString', function() {
  it('should reverse the input string', () => {
    let input = 'fun';
    let output = reverseString(input);

    expect(output).to.equal('nuf');
    // expect( reverseString('fun') ).to.equal('nuf');
  })
  it('should throw a TypeError if input is not a string', () => {
    let badCase = () => reverseString(5);
    
    expect(badCase).to.throw(TypeError)
  })
})