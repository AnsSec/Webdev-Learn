const app=require('../backend/app');
const {connectDB} =require('../backend/config/database')
require('dotenv').config({path:"backend/config/.env"});

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
});

connectDB();