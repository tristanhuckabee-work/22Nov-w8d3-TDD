const chai = require('chai');
const expect = chai.expect
const spies = require('chai-spies');
const {Triangle, Scalene, Isosceles} = require('../problems/triangle');

chai.use(spies);

describe('Triangle', function() {
  let tri1, tri2;
  beforeEach(() => {
    tri1 = new Triangle(3,3,3)
    tri2 = new Triangle(1,1,1)
  })
  context('constructor', () => {
    it('should make a triangle instance', () => {
      expect(tri1.side1).to.exist;
      expect(tri1.side1).to.equal(3)
      expect(tri1.side2).to.exist;
      expect(tri1.side2).to.equal(3)
      expect(tri1.side3).to.exist;
      expect(tri1.side3).to.equal(3)
    })
  })
  context('getPerimeter()', () => {
    it('should return the perimeter', () => {
      expect(tri1.getPerimeter()).to.equal(9);
      expect(tri2.getPerimeter()).to.equal(3);
    })
  })
  context('haveValidSideLengths()', () => {
    it('should check that any 2 sides are longer than the third', () => {
      expect(tri1.hasValidSideLengths()).to.equal(true);
      expect(tri2.hasValidSideLengths()).to.equal(true);
    })
  })
  context('validate()', () => {
    it('should add an isValid property to your triangle', () => {
      tri1.validate();
      tri2.validate();

      expect(tri1.isValid).to.exist;
      expect(tri1.isValid).to.equal(true);
      expect(tri2.isValid).to.exist;
      expect(tri2.isValid).to.equal(true);
    })
  })
  context('getValidTriangles()', () => {
    it('should return all valid triangles', () => {
      expect(Triangle.getValidTriangles([tri1, 'green', 36])).to.eql([tri1])
    })
  })
})
describe('Scalene', function() {
  let sca, eqi;
  beforeEach(() => {
    sca = new Scalene(1,2,3);
    eqi = new Scalene(2,2,2);
  })
  context('constructor', () => {
    it('should have 3 sides and a isValidTriangle property', () => {
      expect(eqi.side1).to.exist;
      expect(eqi.side1).to.equal(2);
      expect(eqi.side2).to.exist;
      expect(eqi.side2).to.equal(2);
      expect(eqi.side3).to.exist;
      expect(eqi.side3).to.equal(2);
      expect(eqi.isValidTriangle).to.exist;
      expect(eqi.isValidTriangle).to.equal(true);

      expect(sca.side1).to.exist;
      expect(sca.side1).to.equal(1);
      expect(sca.side2).to.exist;
      expect(sca.side2).to.equal(2);
      expect(sca.side3).to.exist;
      expect(sca.side3).to.equal(3);
      expect(sca.isValidTriangle).to.exist;
      expect(sca.isValidTriangle).to.equal(true);
    })
  })
  context('isScalene()', () => {
    it('should return true if it is a valid scalene triangle', () => {
      expect(sca.isScalene()).to.equal(true);
      expect(eqi.isScalene()).to.equal(false);
    })
  })
  context('validate()', () => {
    it('should add isValidScalene property to triangle', () => {
      eqi.validate();
      sca.validate();

      expect(eqi.isValidScalene).to.exist;
      expect(eqi.isValidScalene).to.equal(false);
      expect(sca.isValidScalene).to.exist;
      expect(sca.isValidScalene).to.equal(true);
    })
  })
})
describe('Isosceles', function() {
  let iso, eqi, sca;
  beforeEach(() => {
    iso = new Isosceles(4,3,3)
    sca = new Scalene(1,2,3);
    eqi = new Scalene(2,2,2);
  })
  context('constructor', () => {
    it('should have 3 sides and a isValidTriangle property', () => {

    })
  })
  context('isIsosceles()', () => {
    it('should return true if it is a valid isosceles triangle', () => {
      
    })
  })
  context('validate()', () => {
    it('should add isValidIsosceles property to triangle', () => {
      
    })
  })
})