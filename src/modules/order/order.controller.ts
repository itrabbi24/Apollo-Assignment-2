import { Request, Response } from 'express';
import ZodOrderValidationSchema from './order.validation';
import { OrderService } from './order.service';
import { ZodError } from 'zod';

const CreateOrder = async (req: Request, res: Response) => {
  try {
    // validation the request from body using zot
    const orderCreate = ZodOrderValidationSchema.parse(req.body);

    // crete book request
    const result = await OrderService.CreateOrder(orderCreate);

    // Send success response
    return res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      // Handle validation errors
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: error.errors,
      });
    }

    // Handle other errors
    return res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: (error as Error).message,
    });
  }
};

const TotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderService.CalculateRevenue();
    return res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Failed to calculate revenue',
      status: false,
      error: (error as Error).message,
    });
  }
};

export const OrderController = {
  CreateOrder,
  TotalRevenue
};
