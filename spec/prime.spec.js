var Prime = require('../index');

describe('Prime', function() {
  describe('primes', function() {
    it('should return an infinite list of all prime numbers', function() {
      var primes = Prime.primes();

      expect(primes.next().value).toBe(2);
      expect(primes.next().value).toBe(3);
      expect(primes.next().value).toBe(5);
    });
  });

  describe('takePrimes', function() {
    it('should return the desired amount of primes', function() {
      expect(Prime.takePrimes(0)).toEqual([]);
      expect(Prime.takePrimes(5)).toEqual([2, 3, 5, 7, 11]);
    });
  });

  describe('isPrime', function() {
    it('should be satisfied if a number is prime', function() {
      expect(Prime.isPrime(2)).toBe(true);
      expect(Prime.isPrime(4)).toBe(false);
      expect(Prime.isPrime(7)).toBe(true);
      expect(Prime.isPrime(9)).toBe(false);
    });
  });
});
