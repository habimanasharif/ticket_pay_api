import {
  getUserFromId
} from '../services/userService.js';
  
const getUserInfo = async (req, res, next) => {
    const userId = req.body.userId
    try {
        const user = await getUserFromId(userId)
        
        res.json({user : user});
    } catch (error) {
        next(error);
    }
};
 
export default { 
    getUserInfo
}