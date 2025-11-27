import { useState } from "react";

export default function PaymentForm({ onPaymentChange }) {
  const [method, setMethod] = useState(null); // escrow only
  const [cardNumber, setCardNumber] = useState("");

  const handlePayment = () => {
    const isComplete = method === "escrow" && cardNumber.length > 11;

    onPaymentChange({
      method,
      cardNumber,
      isComplete,
    });
  };

  return (
    <div className="p-6 bg-white rounded-lg border w-full">
      <h2 className="font-semibold text-lg mb-4">Payment Details</h2>

      <p className="font-medium mb-1">Payment Method</p>

      <div className="mb-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="payment"
            value="escrow"
            onChange={(e) => { setMethod(e.target.value); handlePayment(); }}
          />
          Escrow Payment
        </label>
      </div>

      <input
        type="text"
        placeholder="Card Number"
        className="border p-2 rounded w-full mb-3"
        value={cardNumber}
        onChange={(e) => {
          setCardNumber(e.target.value);
          handlePayment();
        }}
      />
    </div>
  );
}
