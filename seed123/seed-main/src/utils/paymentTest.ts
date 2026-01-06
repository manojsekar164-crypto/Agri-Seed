// Test utility for Razorpay integration
import { RAZORPAY_CONFIG } from '../config/razorpay';

export const testRazorpayConfig = () => {
  console.log('Razorpay Configuration Test:');
  console.log('Key ID:', RAZORPAY_CONFIG.key_id);
  console.log('Key Secret:', RAZORPAY_CONFIG.key_secret ? '***configured***' : 'NOT SET');
  
  // Basic validation
  const isValid = RAZORPAY_CONFIG.key_id && RAZORPAY_CONFIG.key_secret;
  console.log('Configuration Valid:', isValid);
  
  return isValid;
};

// Test payment amount conversion
export const testAmountConversion = (amount: number) => {
  const amountInPaise = amount * 100;
  console.log(`Amount: ₹${amount} -> ${amountInPaise} paise`);
  return amountInPaise;
};
