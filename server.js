var express = require('express');
var app = express();
var path = require('path');
var engines = require('consolidate');
var bodyParser = require('body-parser');

const db = require('./config/db.config.js');
 
// // force: true will drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
}); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json());
 
app.use(express.static('./public/assets'));


	app.set('views', __dirname + '/views');
	app.engine('html', engines.mustache);
	app.set('view engine', 'html');
  
 
// app.get('/', (req, res) => res.send('Hello World!'))


require('./routes/user.route.js')(app);
 
// Create a Server
var server = app.listen(3000, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
 
})