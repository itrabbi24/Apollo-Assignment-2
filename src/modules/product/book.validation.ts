import { z } from 'zod';

const categories = [
  'Fiction',
  'Science',
  'SelfDevelopment',
  'Poetry',
  'Religious',
] as const;


// Define book schema
export const bookSchema = z.object({

  title: z.string({ message: 'Title is required' }),
  author: z.string({ message: 'Author is required' }),
  price: z
    .number({
      invalid_type_error: 'Price must be a number',
      required_error: 'Price is required',
    })
    .min(0, { message: 'Price must be a non-negative number' }),
  category: z.enum(categories, {
    errorMap: () => ({
      message: 'Category must be one of the predefined values',
    }),
  }),
  description: z.string({ message: 'Description is required' }),
  quantity: z
    .number({
      invalid_type_error: 'Quantity must be a number',
      required_error: 'Quantity is required',
    })
    .int({ message: 'Quantity must be an integer' })
    .min(0, { message: 'Quantity must be a non-negative integer' }),
  inStock: z.boolean().default(true), // Default to true
});
