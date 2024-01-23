import express from 'express';

import controller from '../controllers/ticketController.js';
import trimRequest from 'trim-request';

import schemas from '../validations/userValidations.js';

const router = express.Router();

 router
  .route('/create')
  .post(
    trimRequest.all,
    controller.createNewTicket
  );
  router
  .route('/all')
  .post(
    trimRequest.all,
    controller.allTicket
  );

export default router;
