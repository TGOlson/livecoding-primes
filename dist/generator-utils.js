'use strict';

var R = require('ramda');

function take(n, gen) {
  return R.map(getGeneratorValue(gen), R.range(0, n));
}

function getGeneratorValue(gen) {
  return function () {
    return gen.next().value;
  };
}

module.exports = {
  take: take
};