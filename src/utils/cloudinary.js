const cloudinary = require('cloudinary').v2;
const express = require('express');
const fileUpload = require('express-fileupload');


const app = express()


const cloud_name = process.env['cloud_name']
const api_key = process.env['api_key']
const api_secret = process.env['api_secret']

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// default options
app.use(fileUpload());

cloudinary.config({ 
  cloud_name: 'cloud_name', 
  api_key: 'api_key', 
  api_secret: 'api_secret',
  secure: true
});

