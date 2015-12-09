var app 		= require('koa')();
var Co 			= require('co');
var Router 	= require('koa-router')();
const send	= require('koa-send');
const serve = require('koa-static');
const Jade 	= require('koa-jade');
const Port 		= process.env.PORT || 3000;
const jade 	= new Jade({
	viewPath: './views',
})

app.use(jade.middleware)

Router.get('/', function *(){
	this.render('index');
})

app.use(serve('public'));

app.use(Router.routes());

app.listen(Port);
console.log("listen to port " + Port);