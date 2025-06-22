import express from 'express';
import {placeOrder, placeOrderStripe, allOrders, userOrders, updateStatus, verifyPayment, placeOrderPaypal} from '../controllers/orderController.js';
import adminAuth from '../middleware/adminAuth.js';
import authUser from '../middleware/auth.js';

const orderRouter = express.Router();

//Admin routes
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

//Thanh toán đơn hàng
orderRouter.post('/place', authUser, placeOrder);
orderRouter.post('/stripe', authUser, placeOrderStripe);
orderRouter.post('/paypal', authUser, placeOrderPaypal);

//User routes
orderRouter.post('/userorders', authUser, userOrders);

//xac thực thanh toán
orderRouter.post('/verifyPayment',authUser, verifyPayment);

export default orderRouter;