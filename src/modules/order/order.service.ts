import { IOrder } from './order.interface';
import OrderModel from './order.model';


// create order
const CreateOrder = async (data: IOrder) => {
  try {
    const order = await OrderModel.create(data);
    return order;
  } catch (error) {
    console.log(error);
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