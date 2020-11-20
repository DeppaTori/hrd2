var mongoose = require('mongoose');
var employeeModel = mongoose.model('Employee');

var sendJsonResponse = function(res,status,content){
    res.status(status);
    res.json(content);
}

module.exports.save = function(req,res){
    employeeModel.create({
        name:req.body.name,
        address:req.body.address
    },function(err,employee){
        if(err){
            sendJsonResponse(res,400,err);
            return;
        }
        sendJsonResponse(res,201,employee);
    });
   
};
module.exports.getOne = function(req,res){
    if(req.params && req.params.employeeId){
    
        employeeModel
        .findById(req.params.employeeId)
        .exec(function(err,employee){
            if(!employee){
                sendJsonResponse(res,404,{
                    "message":"Employee not found"
                });
                return;
            }else if(err){
                sendJsonResponse(res,400,err);
                return;
            }
            sendJsonResponse(res,200,employee);
        });
    }else{
        sendJsonResponse(res,404,{
            "message":"No employeeId in request"
        });
    }
    
};

module.exports.update = function(req,res){
    if(!req.body.name){
        sendJsonResponse(res,404,{
            "message":"Employee name required"
        });
    }

    if(req.params && req.params.employeeId){
    
        employeeModel
        .findById(req.params.employeeId)
        .exec(function(err,employee){
            if(!employee){
                sendJsonResponse(res,404,{
                    "message":"Employee not found"
                });
                return;
            }else if(err){
                
                sendJsonResponse(res,400,err);
                return;
            }
            employee.name = req.body.name;
            employee.save(function(errSave,employeeSaved){
                if(errSave){
                    sendJsonResponse(res,400,errSave);
                    return;
                }
                sendJsonResponse(res,200,employeeSaved);
            });
           
        });
    }else{
        sendJsonResponse(res,404,{
            "message":"No employeeId in request"
        });
    }
   
};

module.exports.delete = function(req,res){
    if(req.params && req.params.employeeId){
    
        employeeModel
        .findByIdAndRemove(req.params.employeeId)
        .exec(function(err,employee){
            if(err){
                sendJsonResponse(res,400,err);
                return;
            }
            sendJsonResponse(res,200,null);
        });
    }else{
        sendJsonResponse(res,404,{
            "message":"No employeeId in request"
        });
    }
    
};