"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_route_1 = require("./modules/product/book.route");
const order_route_1 = require("./modules/order/order.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use((0, cors_1.default)());
// routers
app.use("/api/products", book_route_1.BookRouter);
app.use("/api/orders", order_route_1.OrderRouter);
// routes
app.get('/', (req, res) => {
    res.send('Book Store Server is running........');
});
app.get("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found!",
    });
});
exports.default = app;
