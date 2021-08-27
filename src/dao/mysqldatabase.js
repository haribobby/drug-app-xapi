const mysql = require('mysql2');

// Create the connection pool. The pool-specific settings are the defaults
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'drug_db',
    password: 'root@12345',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
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


