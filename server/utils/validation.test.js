var expect = require('expect');

var {isRealString} = require('./validation');

describe('isRealString', () => {

  it('should reject non string values', () => {
    var  myString = 56;

    var res = isRealString(myString);
    expect(res).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var  myString = "     ";

    var res = isRealString(myString);
    expect(res).toBe(false);
  });

  it('should accept real strings', () => {
    var  myString = "my room";

    var res = isRealString(myString);
    expect(res).toBe(true);
  });

});

