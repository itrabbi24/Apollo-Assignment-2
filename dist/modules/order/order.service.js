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
exports.OrderService = void 0;
const book_model_1 = require("../product/book.model");
const order_model_1 = __importDefault(require("./order.model"));
// create order
const CreateOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Find the product
        const book = yield book_model_1.BookModel.findOne({ _id: data.product });
        // Check if the product exists
        if (!book) {
            throw new Error('Book not found');
        }
        // Check if there is enough stock
        if (book.quantity < data.quantity) {
            throw new Error('Insufficient stock');
        }
        console.log(book.quantity < data.quantity);
        // Reduce the quantity of the product
        book.quantity -= data.quantity;
        // If stock goes to zero, set inStock to false
        if (book.quantity === 0) {
            book.inStock = false;
        }
        // Save the updated book to the database
        yield book.save();
        // Create the order in the database
        const order = yield order_model_1.default.create(data);
        // Return the created order
        return order;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error in creating order:', error.message);
            throw new Error(error.message);
        }
    }
});
// calculate revenue
const CalculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.default.aggregate([
            {
                $project: {
                    totalPrice: { $multiply: ["$totalPrice", "$quantity"] },
                },
            },
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: "$totalPrice" },
                },
            },
        ]);
        let totalRevenue = 0;
        if (result.length > 0) {
            totalRevenue = result[0].totalRevenue;
        }
        return totalRevenue;
    }
    catch (error) {
        console.log(error);
    }
});
exports.OrderService = {
    CreateOrder,
    CalculateRevenue
};
