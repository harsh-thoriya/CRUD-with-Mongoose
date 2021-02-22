let userModel = require("./Schema.js")
let mongoose = require("mongoose")
let harsh = new userModel({username:'Harsh',amount:10000});
let john = new userModel({username:'John',amount:20000})

let errorFunc = function(err){
  if(!err)
    console.log("Connection Successful");
  else
    console.log("Connection Failed");
};

mongoose.connect("mongodb://127.0.0.1:27017/user-data",errorFunc);

let con = mongoose.connection;
harsh.save(function(err,harsh){
  if(err){
    console.log(err);
  }else{
    console.log("done");
  }
});

john.save(function(err,john){
  if(err){
    console.log(err);
  }else{
    console.log("done");
  }
});
