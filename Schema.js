let mongoose=require('mongoose');
let Schema = mongoose.Schema;

let userSchema= new Schema({
  username:{
    type:String,
    required:true,
    trim:true
  },
  amount: {
    type:Number
  }
});

let userModel = mongoose.model('users',userSchema);

module.exports = userModel

