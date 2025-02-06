import React from "react";

const Locations = () => {
  const serviceLocations = [
    {
      state: "NSW",
      image: "/images/map1.svg",
      cities: ["Sydney & Suburbs", "Central Coast", "South Coast", "North Coast"]
    },
    {
      state: "QLD",
      image: "/images/map2.svg",
      cities: ["Brisbane", "Central Coast", "Sunshine Coast", "Gold Coast"]
    },
    {
      state: "WA",
      image: "/images/map3.svg",
      cities: ["Perth"]
    },
    {
      state: "VIC",
      image: "/images/map4.svg",
      cities: ["Melbourne", "South West Vic", "South East Vic"]
    },
    {
      state: "ACT",
      image: "/images/map5.svg",
      cities: ["Canberra"]
    },
    {
      state: "NT",
      image: "/images/map6.svg",
      cities: ["Darwin"]
    },
    {
      state: "Mobile Fitter",
      image: "/images/map7.svg",
      cities: ["We'll come to you - at home, work or even while you shop"]
    }
  ];

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Find a Fitting Station Near You
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
        {serviceLocations.map((location, index) => (
          <div
            key={index}
            className="bg-white flex flex-col shadow-md rounded-lg  overflow-hidden"
          >
            {/* Image Section */}
            <div className="p-4 flex items-center justify-center">
              <img
                src={location.image}
                alt={location.state}
                className="w-[150px] h-[150px] object-contain"
              />
            </div>
            
            {/* State and Cities Section */}
            <div className=" p-4">
              <h3 className="text-lg font-semibold text-center text-blue-600 mb-2">
                {location.state}
              </h3>
              <div className="flex justify-center items-center flex-wrap gap-x-2">
                {location.cities.map((city, cityIndex) => (
                  <span
                    key={cityIndex}
                    className="text-gray-600 hover:text-blue-500 text-center cursor-pointer"
                  >
                    {city}
                    {cityIndex < location.cities.length - 1 && ", "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 transition-all">
          Show All Stations
        </button>
      </div>
    </div>
  );
};

export default Locations;