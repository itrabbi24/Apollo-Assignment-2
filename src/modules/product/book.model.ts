import { model, Schema } from 'mongoose';
import { Category, IBook } from './book.interface';

const BookSchema = new Schema<IBook>({
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
      validator: function (value: number) {
        return value >= 0;
      },
      message: 'Price must be a valid number !',
    },
  },

  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: Object.values(Category),
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
  },isDelete: {
    type: Boolean,
    default: false
  },
}, { timestamps: true });

// remove delete field from response
BookSchema.set('toJSON', {
  transform: (doc, ret, options) => {
    const { isDelete, ...rest } = ret; 
    return rest;
  },
});



export const BookModel = model<IBook>('Book', BookSchema);