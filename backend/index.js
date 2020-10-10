//import modules 
var express = require('express'), 
bodyParser = require('body-parser'),
morgan = require('morgan'),
cors = require('cors');

var app = express();
var port = process.env.PORT || 3000;

//import database connectionj from dbconnection.js file

var mysql = require('./db/db');

//Parse as urlencoded and json.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//adding middleware-cors

app.use(cors());

//Http logger

app.use(morgan('dev'));

app.use(function(req,res,next){res.header("Acces-Control-Allow-Origin","*");
res.header("Access-Control-Allow-Headers","x-access-token, Origin, Content-type, Accept");
next(); });

// import routes 

var route = require('./route/route');
var user = require('./route/user')
app.use('/api', route,user);
app.get('/api',(req,res) => res.send('Hello World!'))
app.listen(port, function(){
	console.log('Server started at http://localhost:'+port+'/');});

