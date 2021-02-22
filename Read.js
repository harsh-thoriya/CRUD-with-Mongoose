var userModel = require("./Schema.js")
let mongoose = require("mongoose")

let errorFunc = function(err){
    if(!err)
      console.log("Connection Successful");
    else
      console.log("Connection Failed");
  };
  
mongoose.connect("mongodb://127.0.0.1:27017/user-data",errorFunc);

userModel.find({username:"John"},function(err,docs){

    console.log("\nSPECIFIC DATA \n",JSON.stringify(docs),"\n"); 
  });


  userModel.find({},(err,result)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("ALL DATA \n",result)
    }
})