const express = require('express');
const druglist = require('../constants');
const queryeexecutor = require('../db/queryexecutor')

const drugroute = express.Router();

//GET - drug all
drugroute.get('/', (req, res) => {

    queryeexecutor.findAll()
    .then(data => res.send(JSON.stringify(data[0])))
    .catch(error => res.status(500).send("there is some erorr while fetching data..."));

});

//READ get by id
drugroute.get('/:id', (req, res) => {

    // const { id } = req.params;
    // const drug = druglist.find(drug => drug.id === id);

    // // for better validation use Joi
    // if (!drug) {
    //     res.status(404).send('This drug id is not available');
    // }

    // res.send(drug);

    const { id } = req.params;
    queryeexecutor.findById(id)
    .then(data => res.send(JSON.stringify(data[0])))
    .catch(error => res.status(500).send("there is some erorr while fetching data..."));

});

//Creation
drugroute.post('/', (req, res) => {

    const drugObj = req.body;

    const drug = {
        title: drugObj.title,
        amount: drugObj.amount,
        popular: drugObj.popular,
        desc: drugObj.desc
    }

    queryeexecutor.save(drug).then(data => res.send(JSON.stringify(data[0])))
    .catch(error => res.status(500).send("there is some erorr while fetching data..."));
    // druglist.push(drug);
    // res.send(drug);
});

module.exports = drugroute;