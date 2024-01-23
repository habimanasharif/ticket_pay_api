import mongoose from "mongoose"
import { v4 as uuid } from "uuid"

const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        required : true,
    },
    name : {type : String,required : true, },
    phone : {type : String},
    email : {type : String, required : true,},
    password : {type : String,required : true,},
    role: {type : String, required : true,default:'Driver'}
},{collection : "users"})

const UserModel = mongoose.model('UserSchema', userSchema)

export default UserModel;