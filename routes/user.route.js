
module.exports = function (app) {

	const controller = require('../controllers/user.controller');


	app.get('/', controller.test);


	// Save a User to MySQL

	app.post('/api/burgers/', controller.save);

	app.put('/api/burgers/:item_id', controller.update);
}