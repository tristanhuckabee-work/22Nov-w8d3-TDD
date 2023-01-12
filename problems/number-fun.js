function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if ( n < 1 || n > 1000000 ) {
    throw new TypeError();
  }
  let total = 1

  for (let i = 1; i <= n; i++ ) {
    total *= i;
  }

  return total;
}

module.exports = {
  returnsThree,
  reciprocal
};