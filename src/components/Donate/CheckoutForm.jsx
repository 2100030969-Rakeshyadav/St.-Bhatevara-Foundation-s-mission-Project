import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './CheckoutForm.css';
import Modal from './Modal';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || isProcessing) {
      return;
    }

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: name,
        email: email,
      },
    });

    if (error) {
      setError(error.message);
      setIsProcessing(false);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: amount * 100, // Stripe expects the amount in cents
          currency: 'inr',
        }),
      });

      const paymentIntent = await response.json();

      const confirmResult = await stripe.confirmCardPayment(paymentIntent.clientSecret, {
        payment_method: paymentMethod.id,
      });

      if (confirmResult.error) {
        setError(confirmResult.error.message);
        setSuccess(false);
      } else {
        setSuccess(true);
        setError(null);
      }
    } catch (error) {
      setError(error.message);
      setSuccess(false);
    }

    setIsProcessing(false);
  };

  return (
    <div>
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Donate to Our NGO</h2>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
      </div>
      <div className="form-group">
        <label>Cardholder Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Cardholder Name"
          required
        />
      </div>
      <div className="form-group">
        <label>Donation Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Donation Amount"
          required
        />
      </div>
      <div className="form-group">
        <label>Card Details</label>
        <CardElement options={{ hidePostalCode: true }} />
      </div>
      <button type="submit" disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Donate'}
      </button>
      {error && <div className="error-message">{error}</div>}
      {success && <div className="success-message">Thank you for your donation!</div>}
    </form>
    <Modal show={success} onClose={() => setSuccess(false)} />
    </div>
  );
};

export default CheckoutForm;
