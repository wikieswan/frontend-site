var express = require('express');
var app = express();
var http = require('http');

var logger = require('morgan');
var ejs = require('ejs');

//Application
app.set('title', 'My Site');
app.enable('trust proxy');
app.set('view engine', 'ejs');  

//logger
app.use(logger());

app.use(express.static(__dirname + '/public'));

//website global envarement setting
var backendServerHost = {
		development : 'http://127.0.0.1:9000',
		production : '',
		test : ''
	},
	staticServerHost = {
		development : 'http://127.0.0.1:10000',
		production : '',
		test : ''
	},
	frontendServerHost = {
		development : 'http://127.0.0.1:8000',
		production : '',
		test : ''
	};
//run this : SET NODE_ENV=production | development  | test
var _env = process.env.NODE_ENV


var contentPath = frontendServerHost[_env],
	staticPath = staticServerHost[_env] + '/public/';


app.get('/', function(req, res){
	var option = {
		contentPath : contentPath,
		staticPath : staticPath,
		goodsList :[]
	}
	http.get(backendServerHost[_env] + "/goodsList", function(res0,data) {
		res0.setEncoding('utf8');
		var body = '';
		res0.on('data', function (chunk) {
			body += chunk;
		});
		res0.on('end', function() {
			body = JSON.parse(body)
		    option.goodsList = body.list;
		    res.render('index', option);
		});
	}).on('error', function(e) {
	  console.log("ERROR =================== :" + e.message);
	});
	
});


app.get('/goodsInfoShow/:goodsCode', function(req, res){
	var goodsCode = req.params.goodsCode;
	console.info('------------------------ddd-------------------------')
	console.info(goodsCode)
	var goodsCode1 = req.query.goodsCode;
	console.info(goodsCode1)
	var data = [
			{
				goodsCode : '1000',
				goodsName : '商品1 goods1',
				goodsImg : 'imgs/1.jpg'
			},
			{
				goodsCode : '1001',
				goodsName : '商品2 goods2',
				goodsImg : 'imgs/2.jpg'
			}
	];
	var option = {
		contentPath : contentPath,
		goodsName : '商品1'
	}
	res.render('goodsInfoShow', option);
});



app.get('/api', function(req, res0){
  	http.get("http://127.0.0.1:4000/api", function(res,data) {
		  res.setEncoding('utf8');
		  res.on('data', function (chunk) {
		    chunk = JSON.parse(chunk)
		    res0.render('layout', chunk)
		  });
	}).on('error', function(e) {
	  console.log("ERROR =================== :" + e.message);
	});
});

app.listen(8000);
console.log('server start at 8000');
console.info('now the envirament is ' + _env);