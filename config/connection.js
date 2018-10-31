var connection;

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
     connection = {
        database: 'burgers_db',
        username: 'root',
        password: 'root',
        host: 'localhost',
        dialect: 'mysql',
        port:3000,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
      };
}

module.exports = connection;