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
app.get('/maxLen', function(req, res){
	var data = {
		str : 'The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index page!The index pageindex page!The index page!The index page!The index page!The index page!The index page',
		
	}
   res.send(data);
});
app.get('/goodsList', function(req, res){
	var data = {
		list:[
		{
			"goodsCode" : '1000',
			"goodsName" : '商品1 goods1',
			"goodsImg" : 'imgs/1.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/3.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/4.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/5.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/6.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/7.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/8.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/9.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/10.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/11.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/12.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/13.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/14.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/15.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/16.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/17.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/18.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/19.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/20.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/21.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/22.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/23.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/24.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/25.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/26.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/27.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/28.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/29.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/30.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/31.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/32.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/33.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/34.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/35.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/36.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/37.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/38.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/39.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/40.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		},
		{
			"goodsCode" : '1001',
			"goodsName" : '商品2 goods2',
			"goodsImg" : 'imgs/2.jpg'
		}
		
		
	]}
   res.send(data);
});

app.listen(9000);
console.log('server start at 9000');