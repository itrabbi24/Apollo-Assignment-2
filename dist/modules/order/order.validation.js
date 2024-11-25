"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const ZodOrderValidationSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email({ message: "Invalid email format" })
        .nonempty({ message: "Email is required" }),
    product: zod_1.z
        .string()
        .nonempty({ message: "Product is required" }),
    quantity: zod_1.z
        .number()
        .int({ message: "Quantity must be an integer" })
        .positive({ message: "Quantity must be greater than 0" }),
    totalPrice: zod_1.z
        .number()
        .positive({ message: "Total price must be greater than 0" }),
});
exports.default = ZodOrderValidationSchema;
