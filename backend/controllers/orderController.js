import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";
import paypalClient from '../config/paypal.js';
import paypal from '@paypal/checkout-server-sdk';

//Biến toàn cục
const currency = "vnd"
const delilveryCharge = 20000; // Phí vận chuyển

// Khởi tạo Stripe với khóa bí mật
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD", // Phương thức thanh toán
      payment: false, // Chưa thanh toán
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Đặt hàng thành công" });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const placeOrderStripe = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "Stripe", // Phương thức thanh toán
      payment: false, // Chưa thanh toán
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price, // Giá tính bằng đồng
      },
      quantity: item.quantity,
    }))

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: 'Phí vận chuyển',
        },
        unit_amount: delilveryCharge, // Giá tính bằng đồng
      },
      quantity: 1,
    })

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: 'payment',
    })

    res.json({
      success: true,
      session_url: session.url,})

  } catch (error) {
     console.error(error);
    res.json({
      success: false,
      message: error.message,})
  }
};

const verifyPayment = async (req, res) => {
  const {orderId, success, userId} = req.body;

  try {
    if(success === "true") {
      // Cập nhật đơn hàng là đã thanh toán
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true, message: "Thanh toán thành công" });

    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Thanh toán thất bại" });
    }
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
}

const placeOrderPaypal = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "PayPal",
      payment: false,
      date: Date.now(),
    };

    const newOrder = await new orderModel(orderData).save();

    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer("return=representation");
    request.requestBody({
      intent: "CAPTURE",
      purchase_units: [{
        reference_id: newOrder._id.toString(),
        amount: {
          currency_code: "USD", // PayPal không hỗ trợ VND
          value: (amount / 24000).toFixed(2), // Chuyển sang USD
        },
      }],
      application_context: {
        return_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      },
    });

    const client = paypalClient();
    const order = await client.execute(request);

    res.json({ success: true, approval_url: order.result.links.find(link => link.rel === 'approve').href });

  } catch (error) {
    console.error(error);
    res.json({ success: false, message: error.message });
  }
};

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Dữ liệu trả về
const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//Tình trạng đơn hàng
const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;

    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({
      success: true,
      message: "Cập nhật tình trạng đơn hàng thành công",
    });
  } catch (error) {
    console.error(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export { verifyPayment, placeOrder, placeOrderStripe, placeOrderPaypal, allOrders, userOrders, updateStatus };
