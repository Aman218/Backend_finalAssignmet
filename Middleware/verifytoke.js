import jwt from 'jsonwebtoken'
import { user_model } from '../Model/user.model.js'
export function verifyToken(req,res,next){
    if(req.headers&&req.headers.authorization&&req.headers.authorization.split(" ")[0]=='JWT'){
        jwt.verify(req.headers.authorization.split(" ")[1],"secretkey",function(err,verifiedToken){
             if(err){
                return res.status(404).send("Invalid Token id")
             }
             console.log("Verified token id ",verifiedToken)
             
             user_model.findById(verifiedToken.id).then((user)=>{
                console.log(user)
                next();
             })
        })
    }
    else{
        return res.status(404).send({message:"Token isn't present"})
    }
}