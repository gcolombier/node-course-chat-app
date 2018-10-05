const _ = require('lodash');

[{
  id:'/#fjkadvnbvnbv',
  name:'GC',
  room:'The office fans'
}]

// addUser(id, name, room)
// removeUser(id)
// getUser(id)
// getUserList(room)


// class Person  {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`
//   } 
// }

// var me = new Person('GC', 42);
// var description = me.getUserDescription();
// console.log(description);

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id) {
    return  _.remove(this.users, (user) => user.id === id)[0];
    
    // return user that was removed
  }
  getUser(id) {
    return this.users.filter( (user) => user.id === id)[0];
  }
  getUserList(room) {
    var users = this.users.filter( (user) => user.room === room);
    var namesArray = users.map( (user) => user.name);

    return namesArray;
  }

}

module.exports = {Users};