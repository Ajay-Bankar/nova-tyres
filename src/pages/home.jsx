import React from 'react';
import { Search, PhoneCall, CheckCircle,Star,} from 'lucide-react';
import FAQSection from '../components/FAQSection';
import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PaymentOptions from '../components/PaymentOptions';




const Home = () => {

  
  return (
    <div className="min-h-screen bg-gray-50">
     
      {/* Hero Section */}
      
      <div className="relative h-96 bg-gray-900">
        <div className="absolute inset-0 bg-black/60 flex justify-center items-center">
          <div className="container mx-auto px-4  flex justify-between items-center">
            {/* Left Side: Text Content */}
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Premium Tyres for Every Vehicle
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Find the perfect tyres for your car with our expert guidance and competitive prices
              </p>

              {/* Search Bar */}
              <div className="flex items-center w-full bg-white rounded-lg p-2">
                <input
                  type="text"
                  placeholder="Enter your vehicle details..."
                  className="flex-1 px-4 py-2 outline-none"
                />
                <button className="    flex items-center">
                  <Search color='#000000' className=" " />
                  
                </button>
              </div>
            </div>

            {/* Right Side: Tyre Image */}
            <div className="hidden md:block relative flex-shrink-0 w-[300px]  h-[300px] ">
              <div className="absolute inset-0  border-4 border-transparent animate-spin-border "></div>
              <img
                src="../images/hero3.jpg"
                alt="Tyres"
                className="  border-white w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      


      {/* Features Section */}
      <div className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 ">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
            <p className="text-gray-600">Top brands and guaranteed quality for every tyre we sell</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl">
            <PhoneCall className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-600">Professional guidance from our experienced team</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-xl">
            <CheckCircle className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fast Installation</h3>
            <p className="text-gray-600">Quick and professional fitting service at your convenience</p>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Featured Tyres</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                id: 1,
                image: "../images/mud1.jpg",
                title: "Mud Tyres",
                description: "All-season performance",
                price: "From $89.99",
              },
              {
                id: 2,
                image: "../images/f1.png",
                title: " Goodride Solmax",
                description: "High durability and comfort",
                price: "From $99.99",
              },
              {
                id: 3,
                image: "../images/f4.png",
                title: "Premium Tyre 3",
                description: "Optimized for wet roads",
                price: "From $79.99",
              },
              {
                id: 4,
                image: "../images/f5.jpg",
                title: "WINRUN KF 997 305/45R22 118V",
                description: "Superior grip and control",
                price: "From $109.99",
              },
            ].map((tyre) => (
              <div key={tyre.id} className="border rounded-lg shadow-xl overflow-hidden flex flex-col justify-center items-center">
                {/* Tyre Image */}
                <div className=" p-4">
                  <img
                    src={tyre.image}
                    alt={tyre.title}
                    className="w-[300px] h-[250px] object-contain"
                  />
                </div>
                {/* Tyre Details */}
                <div className="p-4  w-full" >
                  <h3 className="font-semibold mb-2">{tyre.title}</h3>
                  <p className="text-gray-600 mb-2">{tyre.description}</p>
                  <p className="text-blue-600 font-bold">{tyre.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <TestimonialsSection />

       {/* Partner Brands Section */}
       <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Our Partner Brands</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "../images/p6.png",
             "../images/p7.png",
             "../images/p8.png",
             
              "../images/pir2.png",
              
              
              
            ].map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-gray-100  rounded-lg shadow-sm"
              >
                <img src={logo} alt={`Brand ${index + 1}`} className="w-full h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <HeroSection />

      
      <FAQSection />

      <PaymentOptions/>


      {/* Call to Action */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Tyres?</h2>
          <p className="mb-8 text-lg">Book an appointment or get expert advice today</p>
          <button
            onClick={() => window.open("https://novatyres.com.au/", "_blank")}
            className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us Now
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;