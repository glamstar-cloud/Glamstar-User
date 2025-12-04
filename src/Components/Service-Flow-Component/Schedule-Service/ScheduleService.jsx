import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import CardData from "../../CardsData";

export default function ScheduleService() {
  const [date, setDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [expiry, setExpiry] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const service = CardData.find((item) => item.id === Number(id));

  // --- Helpers: parse and format amounts safely ---
  const parseAmount = (val) => {
    if (typeof val === "number" && !Number.isNaN(val)) return val;
    if (val == null) return 0;
    // remove any non-digit except dot
    const cleaned = String(val).replace(/[^0-9.]/g, "");
    if (!cleaned) return 0;
    const n = parseFloat(cleaned);
    return Number.isNaN(n) ? 0 : n;
  };

  const formatCurrency = (value) => {
    // Nigeria format with NGN symbol; adjust locale if needed
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      maximumFractionDigits: 2,
    }).format(value);
  };

  // --- Values ---
  const subtotal = parseAmount(service?.price);
  const discount = 0; // make dynamic later if needed
  const tax = 50; // or compute % of subtotal
  const total = subtotal - discount + tax;

  // For debugging (remove later)
  // console.log({ id, service, subtotal, discount, tax, total })

  const timeSlots = [
    "08:00 AM","09:00 AM","10:00 AM","11:00 AM","12:00 PM",
    "01:00 PM","02:00 PM","03:00 PM","04:00 PM","05:00 PM",
  ];

  const handleChange = (e) => {
    let value= e.target.value.replace(/\D/g, "");
    if (value.length >2) {
      value = value.slice(0,2) + "/" + value.slice(2, 4);
    }
    setExpiry(value)
  }

  const handleBooking = () => {
    if (!selectedTime) {
      alert("please pick a time slot");
      return;
    }
    alert(`Booking confirmed on ${date.toDateString()} at ${selectedTime}`);
    navigate("/Home")
  }

  return (
    <>
      <div className='md:flex md:gap-3 '>
        <div className='space-y-3 p-4 border border-gray-400 rounded-md mb-5'>
          <h1 className='font-playfair font-bold '>Schedule Your Service</h1>

          <div>
            <h1 className='font-playfair font-semibold'>Select a Date</h1>
            <div>
              <Calendar onChange={setDate} value={date} className='rounded-md' />
            </div>
          </div>

          <div>
            <h1>Choose a Time Slot</h1>
            <div>
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-2 m-2 border rounded ${selectedTime === time ? "bg-red-800 text-white" : " hover:bg-gray-400"}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Make Payment */}
        <div className=' p-2 border border-gray-400 rounded-md'>
          <h1 className='font-playfair font-bold'>Payment Details(Escrow System)</h1>
          <p className='text-xs text-justify p-1'>Your payment is securely held by Glamstar's escrow system. It will only be released to the vendor after both you and the vendor confirm the successful completion of the service. This ensures your satisfaction and protects your funds.</p>

          <div className='mt-3'>
            <h1 className='font-playfair font-semibold'>Order Summary</h1>
            <div className='my-3'>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold font-poppins'>Subtotal</h1>
                <p className='font-inter'>{formatCurrency(subtotal)}</p>
              </div>

              <div className='flex items-center justify-between'>
                <h1 className='font-semibold font-poppins'>Discount</h1>
                <p className='font-inter text-red-800'>-{formatCurrency(discount)}</p>
              </div>

              <div className='flex items-center justify-between'>
                <h1 className='font-semibold font-poppins'>Tax</h1>
                <p className='font-inter text-green-800'>{formatCurrency(tax)}</p>
              </div>

              <div className='mt-3 border-t pt-3'>
                <div className='flex items-center justify-between'>
                  <h1 className='font-semibold font-poppins'>Total</h1>
                  <p className='font-inter font-semibold'>{formatCurrency(total)}</p>
                </div>

                <div className='flex items-center justify-between'>
                  <h1 className='font-semibold font-poppins'>Total to be held in Escrow</h1>
                  <p className='font-inter font-bold'>{formatCurrency(subtotal)}</p>
                </div>
              </div>
            </div>

            {/* Escrow Payment Portal */}
            <div className='grid mb-3 mt-8'>
              <input type='text' placeholder='Add card holder full name' required className='border border-gray-400 text-sm p-2 mb-3' />
              <input type='text' placeholder='Credit or Debit card number' required className='border border-gray-400 text-sm p-2' />
            </div>

            <div className='mt-2 flex gap-1 mx-auto mb-3'>
              <div className='w-1/2 sm:w-full'>
                <input type='text' value={expiry} onChange={handleChange} maxLength={5} placeholder='MM/YY' required className='border border-gray-400 text-sm py-2 pl-1' />
              </div>
              <div className='w-1/2 sm:w-full'>
                <input type='number' placeholder='123' required className='border border-gray-400 text-sm py-2 pl-1' />
              </div>
            </div>

          </div>

          <button onClick={handleBooking} className='py-2 bg-red-800 w-full rounded text-white font-semibold mt-3 hover:bg-gray-600'>Confirm Booking And Pay</button>
        </div>
      </div>
    </>
  )
}
