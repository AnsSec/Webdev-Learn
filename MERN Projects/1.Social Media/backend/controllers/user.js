const User = require("../models/User");

exports.registerUser = async (req,res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    };

    user=await User.create({ name:name , email:email , password:password});

    res.status(200).json({
        success: true,
        message:"user successfully created",
      });
  } 
  catch (error) {
    console.error(error);
    return res.status(404).json({
        success:false,
        message:'User Cannot Be Registered please try again later'
    })
  }
};