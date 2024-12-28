import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
// import { BookRouter } from './modules/product/book.route';
// import { OrderRouter } from './modules/order/order.route';
import globalErrorHandler from './middlewares/globalErrorhandler';
import notFound from './middlewares/notFound';
import router from './routers';

const app = express();

// parsers
app.use(express.json());
app.use(cors());

// routers
app.use("/api/", router);

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('Book Store Server is running........');
});


// global router error handler
// app.get("*", (req: Request, res: Response) => {
//   res.status(404).json({
//     success: false,
//     message: "Route not found!",
//   });
// });


// Global error handler
// @ts-ignore
app.use(globalErrorHandler)


// Global not found handler
// @ts-ignore
app.use(notFound)

export default app;