import { Router } from "express";
import { BookRouter } from "../modules/product/book.route";
import { OrderRouter } from "../modules/order/order.route";

const router = Router();

const moduleRouters=[
    {
        path: '/products',
        route: BookRouter
    },
    {
        path: '/orders',
        route: OrderRouter
    }
]

moduleRouters.forEach(route => {
    router.use(route.path, route.route)
})

// router.use('/products', BookRouter)
// router.use('/orders', OrderRouter)





export default router;
