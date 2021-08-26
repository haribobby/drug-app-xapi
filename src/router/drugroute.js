const express = require('express');
const druglist = require('../util/constants');
const queryeexecutor = require('../dao/queryexecutor')
const DrugService = require('../service/drugservice')

const drugroute = express.Router();

//GET - drug all
drugroute.get('/', DrugService.getAll);

//READ get by id
drugroute.get('/:id', DrugService.getDrugByID);

//Creation
drugroute.post('/', DrugService.saveDrug);

//updation

//deletion

module.exports = drugroute;