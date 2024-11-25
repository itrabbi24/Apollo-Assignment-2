import express, { Request, Response } from 'express';
import cors from 'cors';
import { BookRouter } from './modules/product/book.route';
import { OrderRouter } from './modules/order/order.route';

const app = express();

// parsers
app.use(express.json());
app.use(cors());

// routers
app.use("/api/products", BookRouter);
app.use("/api/orders", OrderRouter);

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('Book Store Server is running........');
});


export default app;