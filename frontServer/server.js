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


var contentPath = 'http://127.0.0.1:8000',
	staticPath = 'http://127.0.0.1:10000/public/';

app.get('/', function(req, res0){
	
	var option = {
		contentPath : contentPath,
		staticPath : staticPath,
		goodsList :[]
	}
	
	http.get("http://127.0.0.1:9000/goodsList", function(res,data) {
		res.setEncoding('utf8');
		var body = '';
		res.on('data', function (chunk) {
			body += chunk;
		});
		res.on('end', function() {
			body = JSON.parse(body)
		    option.goodsList = body.list;
		    res0.render('index', option);
		});
	}).on('error', function(e) {
	  console.log("错误：" + e.message);
	});
	
});
app.get('/maxLen', function(req, res0){
	
	var option = {
		contentPath : contentPath,
		staticPath : staticPath,
		goodsList :[]
	}
	
	http.get("http://127.0.0.1:9000/maxLen", function(res,data) {
		  res.setEncoding('utf8');
		  res.on('data', function (chunk) {
		  	console.log(chunk)
		    chunk = JSON.parse(chunk)
		   
		    
		  });
	}).on('error', function(e) {
	  console.log("错误：" + e.message);
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
	  console.log("错误：" + e.message);
	});
});

app.listen(8000);
console.log('server start at 8000');