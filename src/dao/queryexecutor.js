const pool = require('./mysqldatabasconfig')

const findAll = () => {

    return pool.execute('SELECT * FROM drugs');
}

const findById = (id) => {

    return pool.execute('SELECT * FROM drugs WHERE id=' + id);
}

const save = (drug) => {

    return pool.execute('INSERT INTO drugs(title, amount, popular, description) VALUES(?,?,?,?)', [drug.title, drug.amount, drug.popular, drug.desc]);
}

module.exports = { findAll, findById, save };