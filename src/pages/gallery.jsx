import React from "react";

const Gallery = () => {
  const galleryItems = [
    { id: 1, image: "/images/g1.jpg", title: "Toyota Landcruiser 200" },
    { id: 2, image: "/images/g2.jpg", title: "Ford Ranger Raptor" },
    { id: 3, image: "/images/g3.jpg", title: "Mitsubishi Triton" },
    { id: 4, image: "/images/g4.jpg", title: "RAM 1500" },
    { id: 5, image: "/images/g5.jpg", title: "Ford Ranger" },
    { id: 6, image: "/images/g6.jpg", title: "Nissan Patrol" },
    { id: 7, image: "/images/g7.jpg", title: "Mazda MX-5" },
    { id: 8, image: "/images/g8.jpg", title: "Jeep Gladiator" },
    { id: 9, image: "/images/g9.jpg", title: "Subaru WRX" },
    { id: 10, image: "/images/g10.jpg", title: "Isuzu D-Max" },
    { id: 11, image: "/images/g11.jpg", title: "Renault Megane" },
    { id: 12, image: "/images/g12.jpg", title: "Toyota Fortuner" },
  ];

  return (
    <div className="min-h-screen py-16 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Our Vehicle <span className="text-blue-700">Gallery</span>
        </h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore our collection of professionally fitted vehicles, showcasing the finest in automotive customization and care.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              
              <div className="p-4 hover:bg-blue-300">
                <h3 className="text-xl text-center font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                
              </div>
              
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;