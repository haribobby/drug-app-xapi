const queryeexecutor = require('../dao/queryexecutor')


const getAll = async (req, res, next) => {

    try {
        const data = await queryeexecutor.findAll();
        res.send(JSON.stringify(data[0]));
    }
    catch (error) {
        res.status(500).send("there is some erorr while fetching data...", error);
    }
    next();

}
const saveDrug = async (req, res, next) => {
    const drugObj = req.body;
    const drug = {
        title: drugObj.title,
        amount: drugObj.amount,
        popular: drugObj.popular,
        desc: drugObj.desc
    }

    try {
        const data = await queryeexecutor.save(drug);
        console.log("asfasdfasdfasd1");
        res.send(JSON.stringify(data[0]));
    } catch (err) {
        res.status(500).send("there is some erorr while fetching data...");
    }
    next();
}

const getDrugByID = async (req, res, next) => {

    const { id } = req.params;

    try {
        const data = await queryeexecutor.findById(id)
        res.send(JSON.stringify(data[0]));
    } catch (err) {
        res.status(500).send("there is some erorr while fetching data...");
    }
    next();
}

module.exports = { getAll, saveDrug, getDrugByID };
