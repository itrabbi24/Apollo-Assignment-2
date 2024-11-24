import ZodBookValidationSchema from './book.validation';
import { BookService } from './book.service';
import { ZodError } from 'zod';
import { Request, Response } from 'express';

// Create Book
const CreateBook = async (req: Request, res: Response): Promise<Response> => {
  try {
    // validation the request from body using zot
    const bookData = ZodBookValidationSchema.parse(req.body);

    // crete book request
    const result = await BookService.CreateBook(bookData);

    // Send success response
    return res.status(200).json({
      success: true,
      message: 'Product created successfully!',
      data: result,
    });
  } catch (error: unknown) {
    if (error instanceof ZodError) {
      // Handle validation errors
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }

    // Handle other errors
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: (error as Error).message,
    });
  }
};

//   Get all books
const GetAllBooks = async (req: Request, res: Response) => {
  try {
    const result = await BookService.GetAllBooks();
    return res.status(200).json({
      success: true,
      message: 'Products fetched successfully!',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

// Get Single Book By Id
const GetBookById = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await BookService.GetBookById(productId);
    return res.status(200).json({
      success: true,
      message: 'Book retrieved successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};


// Update Book By Id
const UpdateBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const data = req.body;
    const result = await BookService.UpdateBook(productId, data);
    return res.status(200).json({
      success: true,
      message: 'Book updated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};


// Delete Book By Id
const DeleteBook = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await BookService.DeleteBook(productId);
    return res.status(200).json({
      success: true,
      message: 'Book deleted successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};


export const BookController = {
  CreateBook,
  GetAllBooks,
  GetBookById,
  UpdateBook,
  DeleteBook
};
