
var pow = require('../src/js/pow.js');

describe("pow", function() {
  it("exponentiation function", function() {
  	var result;

  	result = pow(2,3)
    expect(result).toBe(8);
  });
});