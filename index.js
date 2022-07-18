import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors";
import postRoutes from "./routes/posts.js";

const app=express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb" , extended:true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended:true}));
app.use(cors());// for problem doesnt exist in requests


app.get("/",(req,res)=>{
    res.json({
        author:"Akin Software",
        message:"Fuck Is Started Bitches",
    })
});
app.use("/posts",postRoutes);

const PORT =process.env.PORT ;
//const CONNECTION_URL="mongodb+srv://akin:akin@cluster0.s2ujq.mongodb.net/?retryWrites=true&w=majority"



mongoose
.connect(process.env.CONNECTION_URL ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server is Running on port : ${PORT} "+ PORT);
});

})
.catch((error)=>{
    console.error(error.message);


})