import mongoose from "mongoose"
import { v4 as uuid } from "uuid"

const plateSchema = new mongoose.Schema({
    _id: {
        type: String,
        default : uuid,
    },
    ownerId:{type : String,required : true, },
    plateNumber : {type : String,required : true, },
    
},{
    timestamps: true,
},{collection : "plates"})

const PlateModel = mongoose.model('plates', plateSchema)

export default PlateModel;