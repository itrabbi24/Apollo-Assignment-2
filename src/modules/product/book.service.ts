import { IBook } from './book.interface';
import { BookModel } from './book.model';

// create book
const CreateBook = async (data: IBook) => {
  try {
    const book = await BookModel.create(data);
    return book;
  } catch (error) {
    console.log(error);
  }
};

// get all books
const GetAllBooks = async () => {
  try {
    const books = await BookModel.find({ isDelete: false });
    return books;
  } catch (error) {
    console.log(error);
  }
};

// get book by id
const GetBookById = async (id: string) => {
  try {
    const book = await BookModel.findById(id);
    return book;
  } catch (error) {
    console.log(error);
  }
};

// update book
const UpdateBook = async (id: string, data: IBook) => {
  try {
    const book = await BookModel.findByIdAndUpdate(id, data, { new: true });
    return book;
  } catch (error) {
    console.log(error);
  }
};

// Delete By Id
const DeleteBook = async (id: string) => {
  try {
    const book = await BookModel.updateOne(
      { _id: id }, // Find the book by its ID
      { $set: { isDelete: true } }, // Set isDelete to true
    );
    if (book.modifiedCount === 0) {
      throw new Error('Book not found or already deleted');
    }
    return book;
  } catch (error) {
    console.log(error);
    throw new Error('Error deleting the book');
  }
};





export const BookService = {
  CreateBook,
  GetAllBooks,
  GetBookById,
  UpdateBook,
  DeleteBook
};
