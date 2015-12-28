var assert = require('assert');
var sum = require('../solutions/question-2');

describe('Question 2', function() {
  describe('multiply', function () {
    it('should return the multiplication of arguments', function () {
      assert.equal(24, sum(4, 6));
      assert.equal(160, sum(10, 8, 2));
    });
  });
});