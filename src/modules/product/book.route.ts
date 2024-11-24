import express, { Router } from 'express';
import { BookController } from './book.controller';

const router = Router();

// import book controller
const { CreateBook, GetAllBooks, GetBookById, UpdateBook, DeleteBook } = BookController;


// @ts-ignore
router.post("/", CreateBook);

// @ts-ignore
router.get("/", GetAllBooks);

// @ts-ignore
router.get("/:productId", GetBookById);

// @ts-ignore
router.put("/:productId", UpdateBook);

// @ts-ignore
router.delete("/:productId", DeleteBook);



export const BookRouter = router;