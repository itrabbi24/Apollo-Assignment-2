"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = require("express");
const book_controller_1 = require("./book.controller");
const router = (0, express_1.Router)();
// import book controller
const { CreateBook, GetAllBooks, GetBookById, UpdateBook, DeleteBook } = book_controller_1.BookController;
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
exports.BookRouter = router;
