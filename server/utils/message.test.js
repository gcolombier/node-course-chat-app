var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage', () => {

it('should generate the correct message object', () => {
  var from = 'Me';
  var text = 'myMessage';

  var res = generateMessage(from,text);
  expect(res).toMatchObject({from,text});
  expect(typeof res.createdAt).toBe('number');
});

});