import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const BillDetails = () => {
  const billAmount = useSelector((store) => store.cart.totalItemsBill);

  const deliveryFee = 39;
  const platformFee = 6;
  const gstFee = 84;

  const finalBillAmount = useMemo(() => {
    return billAmount + deliveryFee + platformFee + gstFee;
  }, [billAmount]);

  return (
    <div className="w-full md:w-8/12 lg:w-6/12 m-auto shadow-xl rounded-2xl my-8 p-4 bg-white">
      <h1 className="text-lg font-semibold mb-4">Bill Details</h1>

      <div className="grid grid-cols-2 gap-y-2 text-gray-700">
        <p className="w-8/12">Item Total</p>
        <span className="text-right">{billAmount}</span>

        <p className="w-8/12">Delivery Fee</p>
        <span className="text-right">{deliveryFee}</span>

        <p className="w-11/12">Platform Fee</p>
        <span className="text-right">{platformFee}</span>

        <p className="w-8/12">GST and Restaurant Charges</p>
        <span className="text-right">{gstFee}</span>
      </div>

      <hr className="my-4 border-t border-gray-300" />

      <div className="flex justify-between font-semibold text-lg">
        <p>TO PAY</p>
        <span>{finalBillAmount}</span>
      </div>
      <div className="flex justify-center mt-4">
        <Link to="/orderConfirmed">
          <button className="uppercase bg-[#ff5200] text-white px-6 py-3 font-bold rounded hover:bg-[#e64900] transition-all">
            Place Order
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BillDetails;
