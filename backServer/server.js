var express = require('express');
var app = express();

var logger = require('morgan');

//Application
app.set('title', 'My Site');
app.enable('trust proxy');


//logger
app.use(logger());

app.get('/api', function(req, res){
	var data = {
		title : 'The index page!',
		dog : {
			food:'bone',
			color:'white'
		}
	}
   res.send(data);
});

app.listen(9000);
console.log('server start at 9000');