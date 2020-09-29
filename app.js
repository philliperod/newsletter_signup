const express = require('express');
const request = require('request');
const https = require('https');
const mailchimp = require('@mailchimp/mailchimp_marketing');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.listen(3000, () => {
  console.log('Server started on port 3000.');
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/signup.html');
});

app.post('/', (req, response) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const emailAddress = req.body.email;
  const listID = 'bcdd24f1b8';
  //   const subscribingUser = {
  //     firstName: firstName,
  //     lastName: lastName,
  //     email: emailAddress
  //     }

  mailchimp.setConfig({
    apiKey: 'b5c3e1f4fcdd76cbf07d67f7c6dea1e6-us2',
    server: 'us2'
  });

  const run = async () => {
    const response = await mailchimp.lists
      .addListMember(listID, {
        members: [
          {
            email_address: emailAddress,
            status: 'subscribed',
            merge_fields: {
              FNAME: firstName,
              LNAME: lastName
            }
          }
        ]
      })
      .then((response) => {
        console.log(response);
        if (response.id !== '') {
          res.sendFile(__dirname + 'success.html');
        }
      })
      .catch((err) => {
        res.sendFile(__dirname + 'failure.html');
        console.log(err);
      });
  };
  run();
});

//   const jsonData = JSON.stringify(data);
//   https.request(url, options, (response) => {

//   })
// console.log(firstName, lastName, email);

// API Key
// b5c3e1f4fcdd76cbf07d67f7c6dea1e6-us2
// List ID
// bcdd24f1b8
