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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_validation_1 = __importDefault(require("./book.validation"));
const book_service_1 = require("./book.service");
const zod_1 = require("zod");
// Create Book
const CreateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validation the request from body using zot
        const bookData = book_validation_1.default.parse(req.body);
        // crete book request
        const result = yield book_service_1.BookService.CreateBook(bookData);
        // Send success response
        return res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
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
            error: error.message,
        });
    }
});
//   Get all books
const GetAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield book_service_1.BookService.GetAllBooks();
        return res.status(200).json({
            success: true,
            message: 'Products fetched successfully!',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
});
// Get Single Book By Id
const GetBookById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield book_service_1.BookService.GetBookById(productId);
        return res.status(200).json({
            success: true,
            message: 'Book retrieved successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
});
// Update Book By Id
const UpdateBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const data = req.body;
        const result = yield book_service_1.BookService.UpdateBook(productId, data);
        return res.status(200).json({
            success: true,
            message: 'Book updated successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
});
// Delete Book By Id
const DeleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield book_service_1.BookService.DeleteBook(productId);
        return res.status(200).json({
            success: true,
            message: 'Book deleted successfully',
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: error instanceof Error ? error.message : 'Unknown error',
        });
    }
});
exports.BookController = {
    CreateBook,
    GetAllBooks,
    GetBookById,
    UpdateBook,
    DeleteBook
};
