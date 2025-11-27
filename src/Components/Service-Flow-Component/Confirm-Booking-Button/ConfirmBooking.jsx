export default function ConfirmBookingButton({ scheduleDone, paymentDone, onConfirm }) {
  const disabled = !(scheduleDone && paymentDone);

  return (
    <button
      className={`w-full py-3 mt-4 rounded text-white font-semibold 
        ${disabled ? "bg-gray-400" : "bg-red-700 hover:bg-red-600"}`}
      disabled={disabled}
      onClick={onConfirm}
    >
      Confirm Booking & Pay
    </button>
  );
}
