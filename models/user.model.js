module.exports = (sequelize, Sequelize) => {
	
	const Burger = sequelize.define('burger', {
	  item_name: {
		  type: Sequelize.STRING
	  },
	  devouted: {
		  type: Sequelize.STRING
		},
		item_id:{
			type: Sequelize.STRING
		}
	});
	
	return Burger;
}
