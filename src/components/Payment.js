import React from 'react';
import { PaystackButton } from 'react-paystack';

const Payment = () => {
  const publicKey = 'pk_test_dfe63313ded4c6ee08cdd27847a56730b2847355'; // Replace this with your Paystack public key

  // Payment callback function
  const onSuccess = (reference) => {
    console.log(reference);
    // Handle successful payment
  };

  // Payment failure callback function
  const onClose = () => {
    console.log('Payment closed');
    // Handle payment closure
  };

  const config = {
    reference: (new Date()).getTime(), // Unique payment reference
    email: 'user@example.com', // Customer's email
    amount: 10000, // Payment amount in kobo
    publicKey: publicKey, // Your Paystack public key
  };

  return (
    <div className='text-sm text-center h-full font-semibold leading-6 text-gray-50 hover:bg-slate-500 bg-purple-700 p-2 rounded-xl'>
      <PaystackButton
        {...config}
        onSuccess={onSuccess}
        onClose={onClose}
        text="Donate Now"
      /> <span aria-hidden="true">&rarr;</span>
    </div>
  );
};

export default Payment;
