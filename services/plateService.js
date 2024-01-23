import {PlateModel} from '../models/index.js'
// import ApiError from '../utils/APIError.js';

const createPlate = async(ticket) =>{
    const newPlate = await PlateModel.create(ticket);
    if(!newPlate )
        throw new Error("Invaid User Id")
    return newPlate ;
}

const getAllUserPlates= async(owner) =>{
    const allPlates= await PlateModel.find({ownerId:owner});
   
    return allPlates;
}
const findPlate= async(plateNumber) =>{
    const plate= await PlateModel.findOne({plateNumber});
   
    return plate;
}

export {
    createPlate,
    getAllUserPlates,
    findPlate
}