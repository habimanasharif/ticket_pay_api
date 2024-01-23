import {
    createTicket,getAllTickets
  } from '../services/ticketService.js';
  import {
    findPlate,
  } from '../services/plateService.js';
    
  const createNewTicket = async (req, res, next) => {
      const {name,plate,amount,details}= req.body
      try {
        //   const user = await getUserFromId(owner)
        //   if(!user){
        //     throw new Error(`User ${owner} not found`)
        //   }
        const myplate = await findPlate(plate)
         if(!myplate){
          throw Error("Plate number doesn't exist")
         }
          const newUser=await createTicket({owner:myplate.ownerId,name:name,amount:amount,details:details,vehicle:plate})
          const responseUser = {
              message : "Ticket created successfully",
              status:"success",
          } 
          res.json({user : responseUser});
      } catch (error) {
          next(error);
      }
  };
  const allTicket = async (req, res, next) => {
    const {owner}= req.body
    try {

        const allTickets=await getAllTickets (owner)
        
        res.json({tickets : allTickets});
    } catch (error) {
        next(error);
    }
};
   
  export default { 
    createNewTicket,
    allTicket
  }