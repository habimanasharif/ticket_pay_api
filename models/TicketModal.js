import mongoose from "mongoose";
import { v4 as uuid } from "uuid"

const ticketSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuid,
    },
    name : {type : String,required : true, },
    amount : {type : String,required : true,},
    owner : {type : String,required : true,},
    vehicle: {type : String, required : true,},
    details: {type : String, required : true,},
    status: {type : String, required : true, default:"UNPAID"},
},{
    timestamps: true,
},{collection : "tickets"})

const TicketModel = mongoose.model('tickets', ticketSchema)

export default TicketModel;