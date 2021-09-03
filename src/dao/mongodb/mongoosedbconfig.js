const mongoose = require('mongoose');

const res = mongoose.connect('mongodb://localhost/drugs_db')
            .then(res => console.log(res))
            .catch(err => console.error(err));