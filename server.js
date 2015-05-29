var fs = require('fs');

var favicon = require('koa-favicon');
var common = require('koa-common');
var router = require('koa-router');
var views = require('koa-render');
var bodyParser = require('koa-body-parser');
var koa = require('koa');
var app = koa();


app.use( common.logger('dev') );
app.use( favicon( __dirname + '/public/favicon.ico' ) );

var publicRouter = new router();

//static - tell app to use static middleware
app.use( common.static(__dirname + '/public') );
//views - tell app to use views / renderer
app.use( views('./public', {
  map: { html: 'handlebars' },
  cache: false
}));

publicRouter.get('/', function*(next) {
	this.body = yield this.render('index');
});

publicRouter.post('/givemeyourdata', function*(next) {
	//console.log(this.request.header)
	this.status = 204;

	writeFile(this.request.body);
});

app.use( bodyParser( { jsonLimit: 10 } ) );
app.use( publicRouter.middleware() );


// listen
var port = process.env.PORT || 9000;
var server = app.listen(port, function () {
    console.log('Listening on port %d', server.address().port);
});


function writeFile( data ) {
	
	//var obj = JSON.parse( data );

	fs.writeFile( "./results/" + data.uuid + ".json", JSON.stringify(data, null, '\t'), function(err) {
	    if(err) {
	        console.log(err);
	    } else {
	        console.log("The file " + data.uuid +" was saved!");
	    }
	});
}