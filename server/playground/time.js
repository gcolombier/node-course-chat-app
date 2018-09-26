var moment = require('moment');

// var date = new Date();
// console.log(date.getMonth()); 

// var date = new moment();
// date.add(1,'year');
// console.log(date.format('MMM Do, YYYY'));

var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var createdAt = 1234;
var date = new moment(createdAt);
console.log(date.format('H:mm a'));