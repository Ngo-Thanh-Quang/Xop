// config/paypal.js
import checkoutNodeJssdk from '@paypal/checkout-server-sdk';

const Environment = process.env.NODE_ENV === "production"
  ? checkoutNodeJssdk.core.LiveEnvironment
  : checkoutNodeJssdk.core.SandboxEnvironment;

const paypalClient = () => {
  const env = new Environment(
    process.env.PAYPAL_CLIENT_ID,
    process.env.PAYPAL_CLIENT_SECRET
  );
  if (env) {
    console.log("PayPal environment initialized successfully.");
  }
  return new checkoutNodeJssdk.core.PayPalHttpClient(env);
};

export default paypalClient;
