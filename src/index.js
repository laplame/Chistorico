const express = require('express');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const { v4: uuid } = require('uuid');
const { format } = require('timeago.js');

//const uuid = require ('uuid');

//inicializaciones 

const app = express();
require('./database');

//settings 
app.set ('port', process.env.PORT||3000);
app.set ('views', path.join(__dirname, 'views'));
app.set ('view engine','ejs');

console.log 
//middleware 

app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/img/uploads'),
  filename: (req, file, cb, filename) => {
    cb(null, uuid() + path.extname(file.originalname));
  }
});

app.use(multer({ storage: storage }).single('image'));

//global variables 

app.use((req, res, next) => {
    app.locals.format = format;
    next();
});

//routes 
app.use(require('./routes/index'));

//static files

app.use(express.static(path.join(__dirname,'public')));

//start server 

app.listen(app.get('port'), ()=>{
  console.log(`server on ${app.get('port')}`);
});

//settings 