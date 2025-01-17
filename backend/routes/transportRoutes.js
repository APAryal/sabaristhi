import express from 'express';
import { getTransportDetails, searchRoutesByPlace } from '../controllers/transportController.js';

const router = express.Router();

router.get('/transport-details/:id', getTransportDetails);
router.get('/search/:from/:to', searchRoutesByPlace);

export default router;