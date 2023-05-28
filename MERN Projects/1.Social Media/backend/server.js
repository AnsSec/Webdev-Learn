const app=require('../backend/app');
require('dotenv').config();


const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Server started successfully at ${PORT}`)
});