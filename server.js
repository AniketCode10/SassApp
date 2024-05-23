require("dotenv").config({path:"./config.env"});

const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const connectDB = require("./Db/ConnectDB");


const app = express();

app.use(bodyparser.urlencoded({extended:true}));

app.use(cors());


const PORT = process.env.PORT || 4242;

app.listen(()=>{
    console.log(`Server is running on ${PORT}`);
})

connectDB();