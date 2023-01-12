module.exports = function reverseString(string) {
  if ( typeof string !== 'string' ) {
    throw new TypeError('This isnt a string!');
  }
  return string.split('').reverse().join('');
};