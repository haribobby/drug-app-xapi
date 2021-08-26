const mysql = require('mysql2');
const config = require('config');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: config.get('db.host'),
    user: config.get('db.user'),
    database: config.get('db.database'),
    password: config.get('db.password'),
    waitForConnections: config.get('db.waitForConnections'),
    connectionLimit: config.get('db.connectionLimit'),
    queueLimit: config.get('db.queueLimit')
});

module.exports = pool.promise();





























// pool.execute('SELECT * FROM drugs', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', JSON.stringify(results[0]));
// });


// // create the connection to database
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     database: 'drug_db',
//     password: 'root@12345'
// });


// connection.execute('SELECT 1 + 1 AS solution', function (error, results, fields) {
//     if (error) throw error;
//     console.log('The solution is: ', results[0].solution);
//   });


