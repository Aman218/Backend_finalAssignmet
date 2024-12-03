import { userLogin, userRegistration } from "../Controller/user.controller.js"


export function userRoute(app){
    app.post("/register",(req,res)=>{
        userRegistration(req,res)
    })
    app.post('/login',(req,res)=>{
        userLogin(req,res)
    })
}