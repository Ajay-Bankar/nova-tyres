import React, { useState } from "react";

const Tyreguide = () => {
  const tyreguideData = [
    {
      title: "How to Choose the Right Tyres for My Car?",
      description: "A complete guide to selecting the best tyres for your vehicle based on performance, safety, and weather conditions.",
      image: "/images/tguide1.svg",
    },
    {
      title: "When to Replace Tyres?",
      description: "Learn about tyre wear indicators and when it's the right time to get a new set of tyres.",
      image: "/images/tguide2.svg",
    },
    {
      title: "Tyre Pressure",
      description: "Keeping your tyres properly inflated is crucial for safety. Learn how to check and maintain correct tyre pressure.",
      image: "/images/tguide3.svg",
    },
    {
      title: "Load Rating & Tyre Speed Rating",
      description: "Understand the maximum load a tyre can carry and its speed rating for a safe driving experience.",
      image: "/images/tguide4.svg",
    },
    {
      title: "Tyre Number Meaning",
      description: "Decode the numbers on your tyre and understand their significance in tyre selection.",
      image: "/images/tguide5.svg",
    },
    {
      title: "Run-Flat Tyres",
      description: "Find out what makes run-flat tyres unique and whether they are the right choice for your car.",
      image: "/images/tguide6.svg",
    },
    {
      title: "Original Equipment Manufacturer (OEM) Tyres",
      description: "Check out the ultimate OEM tyre guide and find out everything you need to know about manufacturer-recommended tyres.",
      image: "/images/tguide7.svg",
    },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section
        className="relative w-full h-[200px] sm:h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('/images/tguidehero.jpg')` }}
      >
        <div className="p-6 rounded-lg text-center text-white">
          <h1 className=" text-2xl font-medium sm:font-bold sm:text-5xl">Your Ultimate Tyre Guide</h1>
          <p className=" text-sm sm:text-lg mt-2">
            Everything you need to know about choosing and maintaining tyres.
          </p>
        </div>
      </section>

      {/* Tyre Guide Cards */}
      <section className="w-full border-2  px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {tyreguideData.map((item, index) => (
          <div
            key={index}
            className="bg-white w-full shadow-lg rounded-lg flex flex-col h-full justify-between items-center overflow-hidden hover:shadow-xl transition-all"
          >
            <img src={item.image} alt={item.title} className="w-[150px] h-[150px] object-contain" />
            <div className="p-4 flex flex-col flex-grow w-full">
              <h2 className="text-xl font-semibold text-center">{item.title}</h2>

              {/* Hide description on small screens */}
              <p className="text-gray-600 mt-2 hidden sm:block flex-grow">{item.description}</p>

              {/* Learn More Button */}
              <button
                className="mt-4 px-4 py-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                Learn More
              </button>
            </div>

            {/* FAQ Section for Small Devices */}
            {openFAQ === index && (
              <div className="p-4 bg-gray-100 mt-2 sm:hidden">
                <p className="text-gray-700">{item.description}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-2xl font-bold">Need Expert Advice?</h2>
        <p className="text-gray-600 mt-2">Contact us for personalized tyre recommendations.</p>
        <button className="mt-4 px-6 py-3 bg-red-500 text-white text-lg rounded-lg hover:bg-red-600 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default Tyreguide;
