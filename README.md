Livecoding node module example.

Made with TDD and live pair-programming from around the globe. Check out the [archived stream](https://www.livecoding.tv/video/functional-javascript-10/).

Install Package

```
$ npm install livecoding-primes
```

Use it

```js
var P = require('livecoding-primes');

P.isPrime(5);  // => true
P.isPrime(10); // => false

P.takePrimes(5); // => [2, 3, 5, 7, 11]

P.primes(); // => <es6 infinite prime generator>
```

Help contribute:

* Run gulp (will compile source code on changes)

```
$ gulp
```

* Build a sweet new feature
* Test it (make sure `npm test` passes)
* Submit a pull request
