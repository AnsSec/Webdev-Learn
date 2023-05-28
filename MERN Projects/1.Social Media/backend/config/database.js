const mongoose=require('mongoose');
require('dotenv').config({path:"backend/config/.env"});

exports.connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL,({
        useNewUrlParser:true,
        useUnifiedTopology:true
    }))
    .then(()=>{console.log("DB Connected Successfully")})
    .catch((err)=>{
        console.log(err);
        process.exit(1);
    })
};
