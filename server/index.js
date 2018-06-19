const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');

const corOpts = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}

const app = express();

app.use(cors(corOpts));
app.use(parser.json());
app.use(parser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

const PORT = 1991;

app.listen(PORT, (err) => {
  err ? console.log('Error connecting to proxy server', err) : console.log('Succesfully connected to proxy server on port', PORT);
});