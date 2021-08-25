const express = require('express');
const druglist = require('../constants');

const drugroute = express.Router();

//GET - drug all
drugroute.get('/', (req, res) => {
    res.send(druglist);
});

//READ get by id
drugroute.get('/:id', (req, res) => {

    const { id } = req.params;
    const drug = druglist.find(drug => drug.id === id);

    // for better validation use Joi
    if (!drug) {
        res.status(404).send('This drug id is not available');
    }

    res.send(drug);
});

//Creation
drugroute.post('/', (req, res) => {

    const drugObj = req.body;

    const drug = {
        id: 'd' + (druglist.length + 1),
        title: drugObj.title,
        amount: drugObj.amount,
        isPopular: drugObj.isPopular,
        desc: drugObj.desc
    }
    druglist.push(drug);
    res.send(drug);
});

module.exports = drugroute;