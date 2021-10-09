import express from 'express';
import Authentication from '../../middleware/Authentication';
import MoveOrderController from '../../Controllers/Transaction/MoveOrder';

const router = express.Router();

router.post(
  '/addmoveorder',
  Authentication,
  MoveOrderController.add_MoverOrder
);

router.get('/getmoveorder', Authentication, MoveOrderController.get_MoverOrder);

export default router;
