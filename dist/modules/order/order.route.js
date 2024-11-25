"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRouter = void 0;
const express_1 = require("express");
const order_controller_1 = require("./order.controller");
const router = (0, express_1.Router)();
// import order controller
const { CreateOrder, TotalRevenue } = order_controller_1.OrderController;
// @ts-ignore
router.post("/", CreateOrder);
// @ts-ignore
router.get("/revenue", TotalRevenue);
exports.OrderRouter = router;
