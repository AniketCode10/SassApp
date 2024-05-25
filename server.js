require("dotenv").config({path:"./config.env"});

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./Db/ConnectDB");
const errorHandler = require("./middlewares/error.js");


const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

connectDB();

app.use("/api/auth",require("./routes/auth"))
app.use(errorHandler);
const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
})

