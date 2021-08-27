process.env.NODE_CONFIG_DIR = `${__dirname}/config`;
const express = require('express')
const helmet = require('helmet');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const drugroute = require('./router/drugroute');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // 
app.use(express.static('public'));

// third-party middleware 
app.use(helmet());

if (app.get('env') === 'dev') {
  app.use(morgan('tiny'));
}

// custom middleware
app.use(logger);

//router
app.use('/api/drugs', drugroute);

console.log(__dirname);
console.log(__filename);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => { console.log(`Server is listening on port ${PORT}`) });