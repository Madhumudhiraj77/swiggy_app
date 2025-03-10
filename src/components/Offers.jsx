import React from "react";

// Example offers data with coupon codes
const offers = [
  {
    id: 1,
    title: "50% off on first order!",
    description:
      "Get 50% off on your first order when you use the code FIRST50.",
    couponCode: "FIRST50",
    image: "https://cdn.grabon.in/gograbon/images/merchant/1610000375685.png", // Swiggy-like image
  },
  {
    id: 2,
    title: "Grab 60% off",
    description:
      "Get 60% off on selected restaurants when you use the code SELECT60.",
    couponCode: "SELECT60",
    image:
      "https://cdn.grabon.in/gograbon/images/web-images/uploads/1658919135375/swiggy-coupons.jpg", // Swiggy-like image
  },
];

const Offers = () => {
  return (
    <div className="py-10 bg-gray-50 max-w-[1200px] items-center  m-auto text-center gap-4 py-5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Latest Offers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {offer.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {offer.description}
                </p>

                <div className="mt-4 text-sm text-gray-800">
                  <strong>Use Code:</strong>{" "}
                  <span className="text-orange-600">{offer.couponCode}</span>
                </div>

                <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600">
                  Get Offer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
