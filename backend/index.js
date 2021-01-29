// import express module
const express = require('express');
// create  an express app
const app = express();
var bodyParser = require('body-parser');

//Allow Access Control
app.use(function (req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin', 'http://18.219.36.140:8080');
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});
// app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submitForm', (req, res) => {
    console.log(req.body)
    res.status(200).send({
        success: true,
        status: "Name successfully sent: " + req.body.name
    })
});

const server = app.listen(3001, () => {
    console.log('Server listening on port 3001');
});
