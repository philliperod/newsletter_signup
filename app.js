const express = require('express');
const request = require('request');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, response) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;

  console.log(firstName, lastName, email);
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
