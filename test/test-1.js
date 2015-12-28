var assert = require('assert');
var sum = require('../solutions/question-1');

describe('Question 1', function() {
  describe('sum', function () {
    it('should return the sum of arguments', function () {
      assert.equal(10, sum(4, 6));
      assert.equal(20, sum(10, 8, 2));
    });
  });
});