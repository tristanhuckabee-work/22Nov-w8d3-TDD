class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    return `Hi, I am ${this.name}.`
  }
  visit(person) {
    return `${this.name} visited ${person.name}`
  }
  switchVisit(person) {
    return person.visit(this);
  }
  update(obj){
    if ( typeof obj === 'object') {
      if (!obj.name || !obj.age) {
        throw new TypeError('Input must have a name and age')
      }

      for(let key in obj) {
        this[key] = obj[key];
      }
    } else {
      throw new TypeError('Input must be an object')
    }

  }
}

module.exports = Person;