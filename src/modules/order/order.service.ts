import { IOrder } from './order.interface';
import OrderModel from './order.model';

const CreateOrder = async (data: IOrder) => {
  try {
    const order = await OrderModel.create(data);
    return order;
  } catch (error) {
    console.log(error);
  }
};

export const OrderService = {
  CreateOrder,
};