import {TicketModel} from '../models/index.js'
import ApiError from '../utils/APIError.js';

const createTicket = async(ticket) =>{
    const newTicket = await TicketModel.create(ticket);
    if(!newTicket)
        throw new Error("Invaid User Id")
    return newTicket;
}

const getAllTickets= async(owner) =>{
    const allTicket= await TicketModel.find({owner:owner});
   
    return allTicket;
}
export {
    createTicket,
    getAllTickets
}