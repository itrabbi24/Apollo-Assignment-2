import { Schema, model } from 'mongoose';
import { IOrder } from './order.interface';

const OrderSchema = new Schema<IOrder>({
  
    email: {
    type: String,
    required: [true, 'Email is required']
  },
  product:{
    type: String,
    required: [true, 'Product is required']
  },
  quantity:{
    type: Number,
    required: [true, 'Quantity is required']
  },
  totalPrice: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be non-negative'],
    validate: {
      validator: function (value: number) {
        return value >= 0;
      },
      message: 'Price must be a valid number !',
    },
  }

});

const OrderModel = model<IOrder>('Order', OrderSchema);

export default OrderModel;
