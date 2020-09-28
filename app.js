const express = require('express');
const request = require('request');
const mailchimp = require('@mailchimp/mailchimp_marketing');

const app = express();

mailchimp.setConfig({
  apiKey: 'b5c3e1f4fcdd76cbf07d67f7c6dea1e6-us2',
  server: 'us2'
});

async function run() {
  const response = await mailchimp.ping.get();
  console.log(response);
}

run();

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

// API Key
// b5c3e1f4fcdd76cbf07d67f7c6dea1e6-us2
// List ID
// bcdd24f1b8
