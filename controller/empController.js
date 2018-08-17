const empModel = require('../model/empModel');

module.exports = {
    save:(req,res)=>{
        console.log(req.body);
        empModel.saveData(req,(resp)=>{
            console.log(resp);
        })
        res.send('hhh');
    },
    get:(req,res)=>{
        console.log(req.params);
        empModel.getData(req,(resp)=>{
            res.json(resp);
        })
    },
    getId:(req,res)=>{
        empModel.getIds(req,(resp)=>{
            res.send(resp);
        })
    },
    update:(req,res)=>{
        empModel.updateId(req,(resp)=>{
            res.send(resp);
        })
    },
    delete:(req,res)=>{
        empModel.deleteId(req,(resp)=>{
            res.send(resp);
        })
    }
}