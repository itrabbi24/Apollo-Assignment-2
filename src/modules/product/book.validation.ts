import { z } from 'zod';
import { Category } from './book.interface';


// Define book schema

const ZodBookValidationSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  author: z.string().min(1, 'Author is required'),
  price: z.number().min(0, 'Price must be non-negative'),
  category: z.nativeEnum(Category), // Use nativeEnum for enum validation
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().min(0, 'Quantity must be greater than or equal to 0'),
  inStock: z.boolean().default(true),
});

// Export book schema
export default ZodBookValidationSchema;
