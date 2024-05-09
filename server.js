const app = require('../app');
const dotenv = require('dotenv');
const path = require('path');
const connectionDatabase = require('./database');

dotenv.config({path:path.join(__dirname,'config.env')})

connectionDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server listening to the port : ${process.env.PORT} in ${process.env.NODE_ENV}`)
})