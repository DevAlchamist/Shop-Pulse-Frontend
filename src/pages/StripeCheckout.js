import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckOutForm";
import "../stripe.css";
import { useSelector } from "react-redux";
import { selectCurrentOrder } from "../features/order/orderSlice";
import Navbar from "../features/navbar/Navbar";

const stripePromise = loadStripe(
  "pk_test_51OOIDTSDnQcE1gU0cXAfBTn18aRkEgkKTCZKGORCAavfTXfFYcuyeOlvrhPIbFcCjmHNitQGK1ejMPzZ1i8qxbJy00N4nQWc9d"
);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");
  const currentOrder = useSelector(selectCurrentOrder);
  console.log(currentOrder);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        totalAmount: currentOrder.totalAmount,
        orderId: currentOrder.id,
      }),
      // metadata:{
      //   order_id: currentOrder.id
      // }
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Navbar>
            <CheckoutForm />
          </Navbar>
        </Elements>
      )}
    </div>
  );
}
