import { jwt_secret } from "../constants"


const jwt =require('jsonwebtoken')

export const getUserFromToken = (token:string)=>{

    return {
            
    }
}

export const signToken = async (claims:object)=>{
    return await jwt.sign(claims,jwt_secret,{expiresIn:'3600s'})
}