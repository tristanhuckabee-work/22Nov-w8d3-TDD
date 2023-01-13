const chai = require('chai');
const expect = chai.expect;
const chaiSpies = require('chai-spies');
const Person = require('../problems/person');

chai.use(chaiSpies)

describe('Person', function() {
  let person, otherPerson;

  beforeEach(() => {
    person = new Person('Mai', 32);
    otherPerson = new Person('Lulu', 57);
  })
  describe('constructor', () => {
    it('should insert a name and age', () => {
      expect(person).to.be.instanceOf(Person);
      expect(person.name).to.equal('Mai');
      expect(person.age).to.equal(32);
    })
  })
  describe('sayHello()', () => {
    it("return a string of the Person instance's name and a greeting message", () => {
      expect(person.sayHello()).to.equal('Hello, Mai');
    })
  })
})