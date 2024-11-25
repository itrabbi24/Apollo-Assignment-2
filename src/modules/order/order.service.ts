import { BookModel } from '../product/book.model';
import { IOrder } from './order.interface';
import OrderModel from './order.model';


// create order
const CreateOrder = async (data: IOrder) => {
  try {
      // Find the product
      const book = await BookModel.findOne({ _id: data.product });
    
      
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
  await book.save();

  // Create the order in the database
  const order = await OrderModel.create(data);

  // Return the created order
  return order;
  
  } catch (error : unknown) {
    if (error instanceof Error) {
      console.error('Error in creating order:', error.message);
      throw new Error(error.message);  
    }
  }
};

// calculate revenue
const CalculateRevenue = async () => {
    try {
        const result = await OrderModel.aggregate([
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

        let totalRevenue : number = 0

        if (result.length > 0) {
          totalRevenue = result[0].totalRevenue; 
        }
        
        return totalRevenue;

      } catch (error) {
        console.log(error);
      }
  };


export const OrderService = {
  CreateOrder,
  CalculateRevenue
};