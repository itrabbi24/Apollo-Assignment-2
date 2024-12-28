"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModel = void 0;
const mongoose_1 = require("mongoose");
const book_interface_1 = require("./book.interface");
const BookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
        message: 'Title is required',
    },
    author: {
        type: String,
        required: true,
        message: 'Author is required',
    },
    price: {
        type: Number,
        required: [true, 'Price is required'],
        min: [0, 'Price must be non-negative'],
        validate: {
            validator: function (value) {
                return value >= 0;
            },
            message: 'Price must be a valid number !',
        },
    },
    category: {
        type: String,
        required: [true, 'Category is required'],
        enum: Object.values(book_interface_1.Category),
    },
    description: {
        type: String,
        required: true,
        message: 'Description is required',
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, 'Quantity must be greater than or equal to 0'],
    },
    inStock: {
        type: Boolean,
        required: true,
        message: 'Book inStock status is required',
        default: true // by default true are active, when false the inactive
    }, isDelete: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });
// remove delete field from response
BookSchema.set('toJSON', {
    transform: (doc, ret, options) => {
        const { isDelete } = ret, rest = __rest(ret, ["isDelete"]);
        return rest;
    },
});
exports.BookModel = (0, mongoose_1.model)('Book', BookSchema);
