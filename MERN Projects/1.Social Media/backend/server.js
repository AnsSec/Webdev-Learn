const express=require('express');
const {connectDB} = require('../backend/config/database')
require('dotenv').config({path:"backend/config/.env"});
// const bodyParser = require('body-parser');
const cookieParser=require('cookie-parser');

const app=express();

//using middlewares
app.use(express.json());
app.use(cookieParser())

//Importing routes 
const post =require("./routes/post");
const user =require("./routes/user");

// using routes
app.use("/api/v1", post);
app.use("/api/v1", user);

module.exports=app;

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
});

connectDB();