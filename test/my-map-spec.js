// const {expect} = require('chai');
const chai = require('chai');
const expect = chai.expect;
const chaiSpies = require('chai-spies');
const myMap = require('../problems/my-map');

chai.use(chaiSpies)

describe('myMap function', () => {
  let callback = (el) => el * 2;
  let arr;

  beforeEach(() => {
    arr = [1, 2, 3];
  })

  it('should work like Array.map()', () => {
    expect(myMap(arr, callback)).to.eql([2, 4, 6])
  })
  it('should not mutate input array', () => {
    myMap(arr, callback);

    expect( arr ).to.eql([1,2,3]);
  })
  it('should not call Array.map()', () => {
    const spy = chai.spy.on(arr, 'map');
    myMap(arr, callback);

    expect(spy).to.not.have.been.called();
  })
  it('should invoke the callback on each element', () => {
    let spy = chai.spy(callback);
    myMap(arr, spy);

    expect(spy).to.have.been.called.exactly(arr.length);
  })
})