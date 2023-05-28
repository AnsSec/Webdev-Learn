const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true ,"please enter a name"],
  },

  avatar:{
    public_id:String,
    url:String,
  },

  email:{
    type:String,
    required:[true ,"please enter a email"],
    unique:[true ,"Email already exist"],
  },

  password:{
    type:String,
    required:[true ,"please Enter a password"],
    minlength:[6,"password must be at least 6 characters"],
    select:false,
  },

  posts:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post",
    }
  ],
  followers:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  ],

  following:[
    {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
  ]

});

module.exports = mongoose.model("User", userSchema);
