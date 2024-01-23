import {
    createPlate,getAllUserPlates,findPlate
  } from '../services/plateService.js';
  import {
    getUserFromId
  } from '../services/userService.js';
    
  const createNewPlate = async (req, res, next) => {
      const {owner,plateNumber}= req.body
      try {
        const checkPlate=  await findPlate(plateNumber)
        if(checkPlate){
            throw new Error("Plate already exists")
        }
          const newPlate=await createPlate({ownerId:owner,plateNumber:plateNumber})
          const response = {
              message : "Plate created successfully",
              status:"success",
          } 
          res.json({user : response});
      } catch (error) {
          next(error);
      }
  };
  const allPlates = async (req, res, next) => {
    const {owner}= req.body
    try {

        const allPlates=await getAllUserPlates (owner)
        
        res.json({plates : allPlates});
    } catch (error) {
        next(error);
    }
};
   
  export default { 
    createNewPlate,
    allPlates
  }