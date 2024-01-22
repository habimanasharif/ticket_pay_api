import {UserModel} from '../models/index.js'
// import ApiError from '../utils/APIError.js';

const getUserFromId = async(userId) =>{
    const user = await UserModel.find({_id: userId});
    if(!user)
        throw new Error("Invaid User Id")
    return user;
}

export {
    getUserFromId
}