import express, { NextFunction, Request, Response, Router } from 'express';
import { BookController } from './book.controller';
import { AnyZodObject } from 'zod';
import ZodBookValidationSchema from './book.validation';

const router = Router();

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // console.log('Middleware called');
    // console.log(req.body);
    // console.log(name);
    // next();

    try {
      await schema.parseAsync(
        {
          body: req.body,
        });
  
     return next();

    } catch (error) {
      next(error);
    }
  };
};

// import book controller
const { CreateBook, GetAllBooks, GetBookById, UpdateBook, DeleteBook } =
  BookController;

// @ts-ignore
router.post('/', validateRequest(ZodBookValidationSchema), CreateBook);

// @ts-ignore
router.get('/', GetAllBooks);

// @ts-ignore
router.get('/:productId', GetBookById);

// @ts-ignore
router.put('/:productId', UpdateBook);

// @ts-ignore
router.delete('/:productId', DeleteBook);

export const BookRouter = router;
