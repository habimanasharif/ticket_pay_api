import express from 'express';
import authRoute from './authRoute.js';
import userRoute from './userRoute.js';
import ticketRoute from './ticket.js';

const router = express.Router();

router.get('/status', (req, res) => {
  res.json({
      status: 'ok',
      processEnv: process.env.NODE_ENV || 'not set',
      CURRENT_PROJECT: process.env.CURRENT_PROJECT,
    });
});


router.use('/auth', authRoute); //add routes
router.use('/user', userRoute);
router.use('/ticket', ticketRoute)

export default router;
