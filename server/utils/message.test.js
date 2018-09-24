var expect = require('expect');
var {generateMessage} = require('./message');
var {generateLocationMessage} = require('./message');

describe('generateMessage', () => {

  it('should generate the correct message object', () => {
    var from = 'Me';
    var text = 'myMessage';

    var res = generateMessage(from,text);
    expect(res).toMatchObject({from,text});
    expect(typeof res.createdAt).toBe('number');
  });

});

describe('generateLocationMessage', () => {
  it('should generate the correct location message object', () => {
    var from = 'Me';
    var longitude = '12';
    var latitude = '16';
    var url = 'https://www.google.com/maps?q=16,12';

    var res = generateLocationMessage(from,latitude,longitude);
    expect(res).toMatchObject({from,url});
    expect(typeof res.createdAt).toBe('number');


  });
});