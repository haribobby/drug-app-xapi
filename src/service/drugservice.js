const queryeexecutor = require('../dao/queryexecutor')
const Drug = require('../model/drug')

const getAllDrugs = async (req, res) => {

    try {
        //const drugdata = await queryeexecutor.findAll();
        const drugdata = await Drug.findAll();
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send("there is some erorr while fetching data...");
    }
}

const getDrugById = async (req, res) => {
    try {

        const { id } = req.params;
        // const drugdata = await queryeexecutor.findById(id);
        const drugdata = await Drug.findByPk(id);
        console.log("drugdata"+JSON.stringify(drugdata))
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send(`there is some erorr while fetching drug id of ${id}`);
    }
}

const saveDrug = async (req, res) => {

    try {
        const drugObj = req.body;

        const drug = {
            title: drugObj.title,
            amount: drugObj.amount,
            popular: drugObj.popular,
            description: drugObj.description
        }
        // const drugdata = await queryeexecutor.save(drug);
        const drugdata = await Drug.create(drug);
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send(`there is some erorr while adding data...`+error);
    }
}

module.exports = { getAllDrugs, getDrugById, saveDrug };