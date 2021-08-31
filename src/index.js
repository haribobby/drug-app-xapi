process.env.NODE_CONFIG_DIR = `${__dirname}/config`;
const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const logger = require('./middleware/logger');
const drugroute = require('./router/drugroute');
const sequelize = require('./dao/databaseconfig');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 
app.use(express.static('public'));

// third-party middleware 
app.use(helmet());

if(app.get('env') === 'dev')
{
  app.use(morgan('tiny'));

}

// custom middleware
app.use(logger);

//router
app.use('/api/drugs',drugroute);

//
console.log("name is .... "+config.get('name'));


// sequelize.sync();


const res = mongoose.connect('mongodb://localhost/drugs_db')
            .then(res => console.log(res))
            .catch(err => console.error(err));
            
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });