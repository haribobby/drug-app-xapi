const express = require('express');
const DrugService = require('../service/DrugService');

const drugroute = express.Router();

//GET - drug all
drugroute.get('/', DrugService.getAllDrugs);

//READ get by id
drugroute.get('/:id',DrugService.getDrugById);

//Creation
drugroute.post('/', DrugService.saveDrug);

module.exports = drugroute;