var userModel = require("./Schema.js")
let mongoose = require("mongoose")
let errorFunc = function(err){
    if(!err)
      console.log("Connection Successful");
    else
      console.log("Connection Failed");
  };
  
mongoose.connect("mongodb://127.0.0.1:27017/user-data",errorFunc);

userModel.update({username:"John"},{amount:45000},function(err,log){
    console.log("Successfully updated");
});

userModel.find({},(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("WITH UPDATED DATA",result)
    }
})