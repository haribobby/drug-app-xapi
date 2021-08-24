const express = require('express')
const druglist = require('./constants');
const logger = require('./logger');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true})); // 
app.use(express.static('public'));
app.use(helmet());
app.use(morgan('tiny'));

app.use(logger); // custom middleware

app.get('/', (req, res) => {
  //locahost:8000/1/vitd
  const params = req.query;
  console.log(params)
  res.send(params);
});

//GET - drug all
app.get('/api/drugs', (req, res) => {
  res.send(druglist);
});


//READ get by id
app.get('/api/drugs/:id', (req, res) => {

  const {id} = req.params;

  const drug = druglist.find(drug =>  drug.id === id);

  if(!drug) // for better validation use Joi
  {
    res.status(404).send('This drug id is not available');
  }

  res.send(drug);
});

//Creation
app.post('/api/drugs', (req,res) => {

  const drugObj = req.body;
  
  const drug =  {
    id: 'd' + (druglist.length+1) ,
    title: drugObj.title,
    amount: drugObj.amount,
    isPopular: drugObj.isPopular,
    desc: drugObj.desc
  }
  druglist.push(drug);
  res.send(drug);
});


//PUT for update

//DELETE for deletion

// Above 2 are assignment fot you

app.listen(8000, () => { console.log('Server is listeing on port 8000') });