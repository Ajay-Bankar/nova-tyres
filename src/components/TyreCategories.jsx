import React from "react";

const tyreCategories = [
  {
    title: "Passenger Car",
    description: "Find the tyre for your needs, be it commuting to work or for the occasional road trip.",
    image: "/images/cat1.svg",
  },
  {
    title: "Run Flat",
    description: "Continue to drive even after a puncture.",
    image: "/images/cat2.svg",
  },
  {
    title: "4x4",
    description: "Get the best 4x4 action! Make driving on highways, dirt & mud a fun & safe experience.",
    image: "/images/cat3.svg",
  },
  {
    title: "All Terrain Tyres",
    description: "Handle all kinds of driving terrains in confidence in your SUV, 4x4 or ute.",
    image: "/images/cat4.svg",
  },
  {
    title: "Mud Terrain",
    description: "Enjoy the toughest mud trails on your next outdoor adventure.",
    image: "/images/cat5.svg",
  },
  {
    title: "Highway Terrain",
    description: "Quiet, durable and practical tyres for reliable on-road use.",
    image: "/images/cat6.svg",
  },
  {
    title: "Light Truck",
    description: "Strong tyres for light trucks, caravans & tradies, specialised to carry heavier loads.",
    image: "/images/cat7.svg",
  },
  {
    title: "Truck",
    description: "Drive long distances and transport heavy freight throughout Australia safely with our large range of truck radials.",
    image: "/images/cat8.svg",
  },
  {
    title: "Motorcycle",
    description: "We've got your motorbikes, cruiser, quad & scooters covered for on & off-road & track drives.",
    image: "/images/cat9.svg",
  },
];

const TyreCategories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-6">Tyres for Your Vehicle</h2>
      <p className="text-center mb-8">Whether you are driving a car, 4x4, motorcycle & light truck, we have the perfect tyre for your needs.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {tyreCategories.map((tyre, index) => (
          <div key={index} className="border bg-white flex flex-col justify-center items-center w-full rounded-lg shadow-lg overflow-hidden">
            <img src={tyre.image} alt={tyre.title} className="w-[150px] h-[150px] object-contain" />
            <div className="p-4">
              <h3 className="text-xl text-center font-semibold mb-2">{tyre.title}</h3>
              <p className="text-gray-700">{tyre.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TyreCategories;
