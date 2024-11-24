import express from 'express';
import { BookController } from './book.controller';

const router = express.Router();

// import book controller
const { createBook } = BookController;


// @ts-ignore
router.post("/", createBook);



export const BookRouter = router;