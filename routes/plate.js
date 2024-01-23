import express from 'express';

import controller from '../controllers/plateController.js';
import trimRequest from 'trim-request';

import schemas from '../validations/userValidations.js';

const router = express.Router();

 router
  .route('/create')
  .post(
    trimRequest.all,
    controller.createNewPlate
  );
  router
  .route('/all')
  .post(
    trimRequest.all,
    controller.allPlates
  );

export default router;
