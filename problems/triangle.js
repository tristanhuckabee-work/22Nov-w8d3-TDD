class Triangle {
  constructor( a, b, c) {
    this.side1 = a;
    this.side2 = b;
    this.side3 = c;
  }
  getPerimeter() {
    return this.side1 + this.side2 + this.side3;
  }
  hasValidSideLengths() {
    let sides = [this.side1 + this.side2, this.side1 + this.side3, this.side2 + this.side3]
    let isValid = true;
    
    sides.forEach( pair => {
      if ( this.getPerimeter() - pair > pair ) {
        isValid = false;
      }
    })

    return isValid;
  }
  validate() {
    this.isValid = this.hasValidSideLengths();
  }
  static getValidTriangles(arr) {
    return arr.filter( el => el instanceof Triangle ? true : false );
  }
}
class Scalene extends Triangle {
  constructor(a,b,c) {
    super(a, b, c);
    this.isValidTriangle = this.hasValidSideLengths();
  }
  isScalene() {
    if ( this.side1 !== this.side2 && this.side1 !== this.side3 ) {
      if (this.side2 !== this.side3) {
        return true;
      }
    }
    return false
  }
  validate() {
    this.isValidScalene = this.isScalene();
  }
}
class Isosceles extends Triangle {
  // constructor(a, b, c) {
  //   super(a, b, c);

  // }
}

module.exports = {
  Triangle,
  Scalene,
  Isosceles
}