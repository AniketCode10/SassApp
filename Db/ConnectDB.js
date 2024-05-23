const mongoose = require("mongoose");


 const connectDB = async()=>{

    try {
       await mongoose.connect(process.env.MONGO_URI)
       console.log(`DB Conncted Successfully ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`Error While connecting to mongoDb`,error);
    }


}


module.exports = connectDB