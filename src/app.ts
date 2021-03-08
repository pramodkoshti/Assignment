import { response } from 'express';
import server from './server';
var fs = require('fs');
var http = require('http');

const port = parseInt(process.env.PORT || '4000');

const starter = new server().start(port)
  .then(port => console.log(`Running on port ${port}`))
  .then()
  .catch(error => {console.log(error)});

export default starter;