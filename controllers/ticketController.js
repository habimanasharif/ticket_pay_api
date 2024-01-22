import {
    createTicket,getAllTickets
  } from '../services/ticketService.js';
  import {
    getUserFromId
  } from '../services/userService.js';
    
  const createNewTicket = async (req, res, next) => {
      const {owner,name,vehicle,amount,details}= req.body
      try {
        console.log(owner)
        //   const user = await getUserFromId(owner)
        //   if(!user){
        //     throw new Error(`User ${owner} not found`)
        //   }

          const newUser=await createTicket({owner:owner,name:name,amount:amount,details:details,vehicle:vehicle})
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