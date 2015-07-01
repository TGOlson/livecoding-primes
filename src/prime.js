var R = require('ramda');

var GeneratorUtils = require('./generator-utils');


function* primes() {
  yield 2;

  var n = 3;

  while(true) {
    if(isPrime(n)) {
      yield n;
    }

    n++;
  }
}


function takePrimes(n) {
  return GeneratorUtils.take(n, primes());
}


function isPrime(n) {
  if(n === 2) {
    return true;
  }

  var possibleFactors = R.range(2, Math.ceil(Math.sqrt(n)) + 1);
  var hasFactor = R.any(isFactorOf(n), possibleFactors);

  return R.not(hasFactor);
}


var isFactorOf = R.curry(function(n, factor) {
  return n % factor === 0;
});


module.exports = {
  takePrimes : takePrimes,
  isPrime    : isPrime
};
