const mongoose = require('mongoose')

const connectionDatabase = ()=>{
    mongoose.connect(process.env.DB_LOCAL_URI ,{

    }).then(con=>{
        console.log(` my Mongodb is connected to the host : ${con.connection.host}`);
})
}

module.exports=connectionDatabase