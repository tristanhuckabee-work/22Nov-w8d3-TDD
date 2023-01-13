const chai = require('chai');
const expect = chai.expect
const spies = require('chai-spies');
const myMap = require('../problems/my-map');

chai.use(spies);

describe('myMap', function() {
  let array1, array2, cb1, cb2;

  beforeEach(() => {
    array1 = [1, 2, 3];
    array2 = ['a', 'b', 'cc', 'd'];
    cb1 = el => el * 2;
    cb2 = el => `${el}${el}`
  })

  it('should work like Array.map()', () => {
    expect(myMap(array1, cb1)).to.eql([2, 4, 6]);
    expect(myMap(array2, cb2)).to.eql(['aa','bb','cccc','dd']);
  });
  it('should not mutate the input Array', () => {
    myMap(array1, cb1);
    myMap(array2, cb2);

    expect(array1).to.eql([1, 2, 3])
    expect(array2).to.eql(['a','b','cc','d'])
  });
  it('should not use Array.map()', () => {
    let arr1Map = chai.spy.on(array1, 'map');
    let arr2Map = chai.spy.on(array2, 'map');
    myMap(array1, cb1);
    myMap(array2, cb2);

    expect(arr1Map).to.not.have.been.called();
    expect(arr2Map).to.not.have.been.called();
  });
  it('should call the callback for each element in the array', () => {
    let callbacks = {
      cb1Inner: cb1,
      cb2Inner: cb2 
    }

    let cbSpy1 = chai.spy.on(callbacks, 'cb1Inner');
    let cbSpy2 = chai.spy.on(callbacks, 'cb2Inner');

    myMap(array1, callbacks.cb1Inner);
    myMap(array2, callbacks.cb2Inner);

    expect(cbSpy1).to.have.been.called.exactly(3);
    expect(cbSpy2).to.have.been.called.exactly(4);
  });
});