'use strict';

var marked0$0 = [primes].map(regeneratorRuntime.mark);
var R = require('ramda');

var GeneratorUtils = require('./generator-utils');

function primes() {
  var n;
  return regeneratorRuntime.wrap(function primes$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return 2;

      case 2:
        n = 3;

      case 3:
        if (!true) {
          context$1$0.next = 10;
          break;
        }

        if (!isPrime(n)) {
          context$1$0.next = 7;
          break;
        }

        context$1$0.next = 7;
        return n;

      case 7:

        n++;
        context$1$0.next = 3;
        break;

      case 10:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

function takePrimes(n) {
  return GeneratorUtils.take(n, primes());
}

function isPrime(n) {
  if (n === 2) {
    return true;
  }

  var possibleFactors = R.range(2, Math.ceil(Math.sqrt(n)) + 1);
  var hasFactor = R.any(isFactorOf(n), possibleFactors);

  return R.not(hasFactor);
}

var isFactorOf = R.curry(function (n, factor) {
  return n % factor === 0;
});

module.exports = {
  takePrimes: takePrimes,
  isPrime: isPrime
};