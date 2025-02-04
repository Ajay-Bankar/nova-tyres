import React from "react";

const serviceLocations = [
  { state: "NSW", cities: ["Sydney & Suburbs", "Central Coast", "South Coast", "North Coast"] },
  { state: "QLD", cities: ["Brisbane", "Central Coast", "Sunshine Coast", "Gold Coast"] },
  { state: "WA", cities: ["Perth"] },
  { state: "VIC", cities: ["Melbourne", "South West Vic", "South East Vic"] },
  { state: "ACT", cities: ["Canberra"] },
  { state: "NT", cities: ["Darwin"] },
  { state: "Mobile Fitter", cities: ["We'll come to you - at home, work or even while you shop"] },
];

const Locations = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Find a Fitting Station Near You</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {serviceLocations.map((location, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h3 className="text-lg font-semibold text-blue-600">{location.state}</h3>
            <ul className="mt-2">
              {location.cities.map((city, cityIndex) => (
                <li key={cityIndex} className="text-gray-600 hover:text-blue-500 cursor-pointer">
                  {city}
                </li>
              ))}
            </ul>
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
