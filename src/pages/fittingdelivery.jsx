import React from "react";
import Locations from "../components/Locations"; // Import Locations component

const FittingDelivery = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section
        className="relative h-[450px] bg-cover bg-center flex items-center justify-center text-center px-4"
        style={{ backgroundImage: "url('../images/fit1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Hassle-Free Tyre Fitting & Delivery
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mt-2 max-w-3xl mx-auto">
            Get premium tyres delivered and fitted at your convenience—whether at home, work, or a nearby fitting station.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-gray-200 py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">How It Works</h2>
        <div className="max-w-6xl mx-auto mt-8 grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">1</div>
            <h3 className="text-xl font-semibold text-gray-800">Enter Your Tyre Size</h3>
            <p className="text-gray-600 mt-2">
              Find your tyre size on the sidewall of your current tyre (e.g., 265/65R17).
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">2</div>
            <h3 className="text-xl font-semibold text-gray-800">Compare & Choose</h3>
            <p className="text-gray-600 mt-2">
              Compare top brands and prices, saving up to 50% off RRP.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="text-4xl font-bold text-blue-500 mb-4">3</div>
            <h3 className="text-xl font-semibold text-gray-800">Get it Delivered & Fitted</h3>
            <p className="text-gray-600 mt-2">
              Enjoy fast delivery to a fitting station or your home, with expert installation.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Section with Horizontal Scroll */}
      <Locations />

      {/* Call-to-Action */}
      <section className="py-16 text-center px-4">
        <h2 className="text-3xl font-bold text-gray-800">Ready to Get Started?</h2>
        <p className="text-lg text-gray-600 mt-2">
          Order your tyres today and experience hassle-free fitting and delivery.
        </p>
        <a
          href="/order"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Order Now
        </a>
      </section>
    </div>
  );
};

export default FittingDelivery;
