// const queryeexecutor = require('../dao/queryexecutor')

const drug = require("../model/mongoschema/drug");
const { ObjectId } = require("mongodb");

// const Drug = require("../model/drug");


const getAllDrugs = async (req, res) => {

    try {
        //const drugdata = await queryeexecutor.findAll();
       // MYSQL = SEQUELIZE const drugdata = await Drug.findAll();
       const drugdata = await drug.find(); // mongoose
        console.log("Process task1");
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send("there is some erorr while fetching data...");
    }
}

const getDrugById = async (req, res) => {
    try {

        const { id } = req.params;
        console.log(id);
      //  const drugdata = await queryeexecutor.findById(id);
     // const drugdata = await Drug.findByPk(id);
     const drugdata = await drug.findOne({ "_id" : ObjectId(id)});
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send(`there is some erorr while fetching drug id of ${id}`);
    }
}

const saveDrug = async (req, res) => {
    
    try {
        const drugObj = req.body;


        console.log(drugObj);

        const druginput = {
            title: drugObj.title,
            amount: drugObj.amount,
            popular: drugObj.popular,
            description: drugObj.desc
        }
       // const drugdata = queryeexecutor.save(drug);
       //const drugdata = await Drug.create(drug);
       const drugdata = await drug.create(druginput);
        res.send(JSON.stringify(drugdata));
    } catch (error) {
        res.status(500).send(`there is some erorr while adding data...`);
    }
}

module.exports = { getAllDrugs, getDrugById, saveDrug };