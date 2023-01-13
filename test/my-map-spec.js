const chai = require('chai');
const expect = chai.expect;
const spies  = require('chai-spies')
const myMap = require('../problems/my-map');

chai.use(spies);

// myMap(arr, cb) => arr.map(cb);

describe('myMap()', () => {
  let array, cb;
  beforeEach(function() {
    array = [1, 2, 3]
    cb = (el) => el * 2;
  })
  it('should return an new array', () => {
    let map = myMap(array, cb);
    expect(map).to.eql([2, 4, 6]);
  })
  it('should not mutate input array', () => {
    myMap(array, cb);
    expect(array).to.eql([1, 2, 3]);
  })
  it('should not use Array.map()', () => {
    let arrSpy = chai.spy.on(array, 'map');
    myMap(array, cb);
    expect(arrSpy).not.to.be.called();
  })
  it('should call the callback on each element', () => {
    let cbSpy = chai.spy(cb);
    myMap(array, cbSpy);
    expect(cbSpy).to.be.called.exactly(array.length)
  })
})