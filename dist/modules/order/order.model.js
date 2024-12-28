"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OrderSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, 'Email is required']
    },
    product: {
        type: String,
        required: [true, 'Product is required']
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required']
    },
    totalPrice: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be non-negative'],
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Price must be a valid number !',
        },
    }
}, { timestamps: true });
const OrderModel = (0, mongoose_1.model)('Order', OrderSchema);
exports.default = OrderModel;
