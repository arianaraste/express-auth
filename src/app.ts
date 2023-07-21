import express, { application } from "express"
import { Application } from "express";
import { General } from "./types/enum";
import http, { Server } from "http";
import { NotFundPage, ServerError } from "./utils/errorhandler";
import  {router as ApplicationRouter}  from "./routes/index.routes";
import mongoose from "mongoose";
mongoose.connect("mongodb://localhost:27017/authorization").then(()=>{console.log("connected to db")}).catch((err)=>{console.log(err.message)});
const app : Application = express();
const server : Server = http.createServer(app);
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(ApplicationRouter);
app.use(NotFundPage);
app.use(ServerError);

server.listen(General.PORT ,()=>{
    console.log(`SERVER RUN ON ${General.URL}`) 
});

