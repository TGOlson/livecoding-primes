var R = require('ramda');


function takePrimes(n) {
  var primes = [];

  for(var i = 2; primes.length < n; i++) {
    if(isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
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
