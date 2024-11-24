import { Request, Response } from 'express';
import ZodBookValidationSchema from './book.validation';
import { BookService } from './book.service';
import { ZodError } from 'zod';



// Create Book
const createBook = async (req: Request, res: Response) : Promise<Response> => {
    try {
    // validation the request from body using zot
    const bookData = ZodBookValidationSchema.parse(req.body);

    // crete book request
    const result = await BookService.CreateBook(bookData);

      // Send success response
      return res.status(200).json({
        success: true,
        message: "Product created successfully!",
        data: result,
      });
    } catch (error: unknown) {
      if (error instanceof ZodError) {
        // Handle validation errors
        return res.status(400).json({
          success: false,
          message: "Validation error",
          errors: error.errors,
        });
      }
  
      // Handle other errors
      return res.status(500).json({
        success: false,
        message: "Something went wrong",
        error: (error as Error).message,
      });
    }
  };





  export const BookController = {
    createBook
  }