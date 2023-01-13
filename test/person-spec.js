const chai = require('chai');
const expect = chai.expect
const spies = require('chai-spies');
const Person = require('../problems/person');

chai.use(spies);

describe('Person', function () {
  let person, person2;
  beforeEach(() => {
    person = new Person('John Doe', 23);
    person2 = new Person('Mary Poppins', 1000)
  })
  context('constructor', () => {
    it('constructor should instantiate with a name and age', () => {
      expect(person.name).to.equal('John Doe');
      expect(person.age).to.equal(23);
    })
  })

  context('sayHello()', () => {
    it('returns the name in a greeting', () => {
      expect(person.sayHello()).to.equal(`Hi, I am John Doe.`)
    })
  })
  context('visit(otherPerson)', () => {
    it('returns a string saying we visited the other', () => {
      expect(person.visit(person2)).to.equal('John Doe visited Mary Poppins');
    })
  })
  context('switchVisit(otherPerson)', () => {
    it('returns a string saying the other visited us', () => {
      expect(person.switchVisit(person2)).to.equal('Mary Poppins visited John Doe');
    })
  })
  context('update(obj)', () => {
    context('input is valid', () => {
      it('should update the current instance with the obj', () => {
        let updateObj = { name: 'Joe Smith', age: 45 }
        expect(person.name).to.equal('John Doe');
        expect(person.age).to.equal(23);
        person.update(updateObj);
        expect(person.name).to.equal('Joe Smith');
        expect(person.age).to.equal(45);
      })
    });
    context('input is not an object', () => {
      it('should throw TypeError:Input must be an object', () => {
        let testFunc = () => { person.update(32) }
        expect(testFunc).to.throw(TypeError)
      })
    })
    context('input has no name or age', () => {
      it('should throw TypeError:Input must have a name and age', () => {
        let testFunc = () => { person.update(32) }
        expect(testFunc).to.throw(TypeError)
      })
    })
  })
  context('tryUpdate(obj)', () => {
    context('', () => {
      it('', () => {

      })
    })
    context('', () => {
      it('', () => {

      })
    })
  })
  context('greetAll(obj)', () => {
    it('', () => {

    })
  })
})