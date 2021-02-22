var userModel = require("./Schema.js")
var mongoose = require("mongoose")
let errorFunc = function(err){
    if(!err)
      console.log("Connection Successful");
    else
      console.log("Connection Failed");
  };
  
mongoose.connect("mongodb://127.0.0.1:27017/user-data",errorFunc);


userModel.findOneAndRemove({username:"John"},(err)=>{
    if (!err) {
        console.log("successfully removed")
    }
    else {
        console.log(err)
    }
})

userModel.find({},(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("\nAFTER DELETE OPRATION\n",result)
    }
})