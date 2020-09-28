const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(express.static('public'));
// you will use this code above to access your static page (css & images) in your local server for the client's browser to use

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, response) => {
  console.log('POST request received.');
});

app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
