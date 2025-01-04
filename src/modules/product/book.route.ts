import express, { NextFunction, Request, Response, Router } from 'express';
import { BookController } from './book.controller';

const router = Router();

const middleware = (req: Request, res: Response, next: NextFunction) => {
    // console.log('Middleware called');
  console.log(req.body);
    next();
  };

// import book controller
const { CreateBook, GetAllBooks, GetBookById, UpdateBook, DeleteBook } = BookController;


// @ts-ignore
router.post("/", CreateBook);

// @ts-ignore
router.get("/", middleware, GetAllBooks);

// @ts-ignore
router.get("/:productId", GetBookById);

// @ts-ignore
router.put("/:productId", UpdateBook);

// @ts-ignore
router.delete("/:productId", DeleteBook);



export const BookRouter = router;