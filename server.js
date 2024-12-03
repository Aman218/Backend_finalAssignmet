import express from "express";
import mongoose from "mongoose";
import { routes } from "./Routes/products.routes.js";
import { userRoute } from "./Routes/user.routes.js";
const app=express();
//Middleware is used to parse the request
app.use(express.json());

//creating my own database with name=shoppy_globe
let Products_Database="shoppy_globe";
mongoose.connect(`mongodb://localhost:27017/${Products_Database}`)

const db=mongoose.connection;
db.on('open',()=>{
    console.log('Connection is successful')
})
db.on('error',()=>{
    console.log('connection failed');
});

routes(app);
userRoute(app)


app.listen(3000,()=>{
    console.log('App is listening on port 3000');
})