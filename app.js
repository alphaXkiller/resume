var app 		= require('koa')();
var Co 			= require('co');
var Router 	= require('koa-router')();
var serve 	= require('koa-static');
var Port 		= process.env.PORT || 3000;

app.use(serve('public'));

app.use(Router.routes());

app.listen(Port);
console.log("listen to port " + Port);