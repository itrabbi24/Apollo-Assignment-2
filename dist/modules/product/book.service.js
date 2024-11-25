"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = require("./book.model");
// create book
const CreateBook = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.BookModel.create(data);
        return book;
    }
    catch (error) {
        console.log(error);
    }
});
// get all books
const GetAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_model_1.BookModel.find({ isDelete: false });
        return books;
    }
    catch (error) {
        console.log(error);
    }
});
// get book by id
const GetBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.BookModel.findById(id);
        return book;
    }
    catch (error) {
        console.log(error);
    }
});
// update book
const UpdateBook = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.BookModel.findByIdAndUpdate(id, data, { new: true });
        return book;
    }
    catch (error) {
        console.log(error);
    }
});
// Delete By Id
const DeleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_model_1.BookModel.updateOne({ _id: id }, // Find the book by its ID
        { $set: { isDelete: true } });
        if (book.modifiedCount === 0) {
            throw new Error('Book not found or already deleted');
        }
        return book;
    }
    catch (error) {
        console.log(error);
        throw new Error('Error deleting the book');
    }
});
exports.BookService = {
    CreateBook,
    GetAllBooks,
    GetBookById,
    UpdateBook,
    DeleteBook
};
