"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
const order_validation_1 = __importDefault(require("./order.validation"));
const order_service_1 = require("./order.service");
const zod_1 = require("zod");
const CreateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // validation the request from body using zot
        const orderCreate = order_validation_1.default.parse(req.body);
        // crete book request
        const result = yield order_service_1.OrderService.CreateOrder(orderCreate);
        // Send success response
        return res.status(200).json({
            success: true,
            message: 'Product created successfully!',
            data: result,
        });
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
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
            error: error.message,
        });
    }
});
const TotalRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield order_service_1.OrderService.CalculateRevenue();
        return res.status(200).json({
            message: 'Revenue calculated successfully',
            status: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        return res.status(500).json({
            message: 'Failed to calculate revenue',
            status: false,
            error: error.message,
        });
    }
});
exports.OrderController = {
    CreateOrder,
    TotalRevenue
};
