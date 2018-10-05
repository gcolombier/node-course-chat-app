const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach( () => {
    users = new Users();

    users.users = [{
      id:'1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id:'2',
      name: 'Jen',
      room: 'React Course'
    },{
      id:'3',
      name: 'Julie',
      room: 'Node Course'
    }]
  });

  it('should add new user', () => {
    var users = new Users();

    var user = {
      id:'123',
      name:'GC',
      room:'the office fans'
    };

    var resUsers = users.addUser(user.id,user.name,user.room);
    expect(users.users).toEqual([user]);

  });

  it('should remove a user', () => {
    var userRemoved = users.removeUser('3');

    expect(users.users).toEqual([{
      id:'1',
      name: 'Mike',
      room: 'Node Course'
    },{
      id:'2',
      name: 'Jen',
      room: 'React Course'
    }]);
    expect(userRemoved).toEqual({id:'3', name: 'Julie',room: 'Node Course'});
  });

  it('should not remove user', () => {
    var userRemoved = users.removeUser('xyz');

    expect(userRemoved).toBeUndefined();
  });

  it('should find user', () => {
    var user = users.getUser('3');
    expect(user).toEqual({id:'3', name: 'Julie',room: 'Node Course'});
  });

  it('should not find user', () => {
    var user = users.getUser('xyz');
    expect(user).toBeUndefined();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike','Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });

});