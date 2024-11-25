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
exports.OrderService = void 0;
const order_model_1 = __importDefault(require("./order.model"));
// create order
const CreateOrder = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = yield order_model_1.default.create(data);
        return order;
    }
    catch (error) {
        console.log(error);
    }
});
// calculate revenue
const CalculateRevenue = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_model_1.default.aggregate([
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
        let totalRevenue = 0;
        if (result.length > 0) {
            totalRevenue = result[0].totalRevenue;
        }
        return totalRevenue;
    }
    catch (error) {
        console.log(error);
    }
});
exports.OrderService = {
    CreateOrder,
    CalculateRevenue
};
