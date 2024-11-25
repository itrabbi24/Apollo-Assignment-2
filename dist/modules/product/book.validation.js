"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const book_interface_1 = require("./book.interface");
// Define book schema
const ZodBookValidationSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, 'Title is required'),
    author: zod_1.z.string().min(1, 'Author is required'),
    price: zod_1.z.number().min(0, 'Price must be non-negative'),
    category: zod_1.z.nativeEnum(book_interface_1.Category), // Use nativeEnum for enum validation
    description: zod_1.z.string().min(1, 'Description is required'),
    quantity: zod_1.z.number().min(0, 'Quantity must be greater than or equal to 0'),
    inStock: zod_1.z.boolean().default(true),
    isDelete: zod_1.z.boolean(),
});
// Export book schema
exports.default = ZodBookValidationSchema;
