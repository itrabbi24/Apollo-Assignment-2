import { Router } from 'express';
import { OrderController } from './order.controller';

const router = Router();

// import order controller
const { CreateOrder } = OrderController;


router.post("/", CreateOrder);



export const OrderRouter = router;