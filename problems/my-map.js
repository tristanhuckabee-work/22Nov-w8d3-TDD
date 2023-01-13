function myMap(inputArray, callback) {
  let res = [];

  inputArray.forEach( el => {
    res.push( callback(el) );
  })

  return res;
  // return inputArray.map(el => callback(el));
}

module.exports = myMap;