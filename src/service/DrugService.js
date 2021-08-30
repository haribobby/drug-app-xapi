// const queryeexecutor = require('../dao/queryexecutor')

const Drug = require("../model/drug");

const getAllDrugs = async (req, res) => {

    try {
        //const drugdata = await queryeexecutor.findAll();
        const drugdata = await Drug.findAll();
        console.log("Process task1");
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send("there is some erorr while fetching data...");
    }
}

const getDrugById = async (req, res) => {
    try {

        const { id } = req.params;
      //  const drugdata = await queryeexecutor.findById(id);
      const drugdata = await Drug.findByPk(id);
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send(`there is some erorr while fetching drug id of ${id}`);
    }
}

const saveDrug = async (req, res) => {
    
    try {
        const drugObj = req.body;


        console.log(drugObj);

        const drug = {
            title: drugObj.title,
            amount: drugObj.amount,
            popular: drugObj.popular,
            description: drugObj.desc
        }
       // const drugdata = queryeexecutor.save(drug);
       const drugdata = await Drug.create(drug);
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send(`there is some erorr while adding data...`);
    }
}

module.exports = { getAllDrugs, getDrugById, saveDrug };