import { z } from "zod";

const ZodOrderValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email format" })
    .nonempty({ message: "Email is required" }),
  product: z
    .string()
    .nonempty({ message: "Product is required" }),
  quantity: z
    .number()
    .int({ message: "Quantity must be an integer" })
    .positive({ message: "Quantity must be greater than 0" }),
  totalPrice: z
    .number()
    .positive({ message: "Total price must be greater than 0" }),
});

export default ZodOrderValidationSchema;
