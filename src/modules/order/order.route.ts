import { Router } from 'express';
import { OrderController } from './order.controller';

const router = Router();

// import order controller
const { CreateOrder, TotalRevenue } = OrderController;


// @ts-ignore
router.post("/", CreateOrder);

// @ts-ignore
router.get("/revenue", TotalRevenue)

export const OrderRouter = router;