const queryeexecutor = require('../dao/queryexecutor')

const getAllDrugs = async (req, res) => {

    try {
        const drugdata = await queryeexecutor.findAll();
        console.log("Process task1");
        res.send(JSON.stringify(drugdata[0]));
    } catch (error) {
        res.status(500).send("there is some erorr while fetching data...");
    }
}

const getDrugById = async (req, res) => {
    try {

        const { id } = req.params;
        const drugdata = await queryeexecutor.findById(id);
        res.send(JSON.stringify(drugdata[0]));
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
            desc: drugObj.desc
        }
        const drugdata = queryeexecutor.save(drug);
        res.send(JSON.stringify(drugdata[0]));
    } catch (error) {
        res.status(500).send(`there is some erorr while adding data...`);
    }
}

module.exports = { getAllDrugs, getDrugById, saveDrug };