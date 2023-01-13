function myMap(inputArray, callback) {
  let res = [];
  for ( let i = 0; i < inputArray.length; i++) {
    let curr = inputArray[i];

    res.push( callback(curr) );
  }

  return res;
  // return inputArray.map( el => callback(el) );
}

module.exports = myMap;