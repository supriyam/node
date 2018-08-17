const emply = require('../schema/empSchema');

//emply.create({name:'supriya',age:3,address:'chattarpur',sal:'22'})

module.exports = {
    saveData:function(req,callback){
        console.log(req.body);
        const userData = req.body;
        emply.create(userData,(err,response)=>{
            if(err){
                callback(err)
            }else{
                callback(response)
            }
        })
    },
    getData:function(req,callback){
        let body;
        if(!req.params){
            body = {}
        }else{
            body = req.params
        }
        console.log(body);
        emply.find(body,(err,response)=>{
            if(err){
                callback(err);
            } else{
                callback(response);
            }
        })
    },
    getIds:(req,callback)=>{
        emply.findById(req.params.id,(err,response)=>{
            if(err){
                callback(err);
            }else{
                callback(response);
            }
        })
    },
    updateId:(req,callback)=>{
        emply.findByIdAndUpdate(req.params.id,req.body,(err,response)=>{
            if(err){
                callback(err);
            }else{
                callback(response);
            }
        })
    },
    deleteId:(req,callback)=>{
        emply.findByIdAndRemove(req.params.id,(err,response)=>{
            if(err){
                callback(err);
            }else{
                callback(response);
            }
        })
    }
}