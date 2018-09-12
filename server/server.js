const path = require('path');
const express = require('express');

const fs = require('fs'); 

const publicPath = path.join(__dirname, '../public');

const port = process.env.PORT || 3000

console.log(__dirname + '/../public');
console.log(publicPath);

var app = express();

app.use(express.static(publicPath));

app.use((req,res,next) => {
  var now = new Date().toString();

  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log',log + '\n', (err) => {
    if (err) {
      console.log('Unable to open server.log.')
    }
  });
  next();
});

app.listen(3000, () => {
  console.log('server up on port 3000');
});


