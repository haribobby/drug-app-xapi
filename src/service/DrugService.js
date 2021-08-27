const queryeexecutor = require('../dao/queryexecutor')

const getAllDrugs = (req, res) => {

  queryeexecutor.findAll()
        .then(data => {
            console.log("Process task1");
            res.send(JSON.stringify(data[0]))
        })
        .catch(error => res.status(500).send("there is some erorr while fetching data..."));

        
        //process drudata
        console.log("Process other task2"); //10
        //asyn await

}

const getDrugById = (req, res) => {

    const { id } = req.params;
    queryeexecutor.findById(id)
        .then(data => res.send(JSON.stringify(data[0])))
        .catch(error => res.status(500).send("there is some erorr while fetching data..."));

}

const saveDrug = (req, res) => {

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
}

module.exports = { getAllDrugs, getDrugById, saveDrug };