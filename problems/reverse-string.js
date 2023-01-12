module.exports = function reverseString(string) {
  if (typeof string !== 'string') {
    throw new TypeError();
  } else {
    return string.split('').reverse().join('');
  }
};