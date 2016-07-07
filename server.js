'use strict';

//require packages that we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var routes = require('./routes/index.js');
var api = require('./api/request.js');

//configuration for bodyParser();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/public', express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;

routes(app);
api(app);

app.listen(port, function(){
    
    console.log('Node.js listening on port ' + port);
    
})