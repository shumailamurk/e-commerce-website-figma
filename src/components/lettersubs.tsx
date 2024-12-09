
import React from 'react';

const Lettersubs = () => {
  return (
    <div className="relative w-full h-96">
      {/* Background Image */}
      <img
        src="/letter.png"
        alt="Descriptive Alt Text"
        className="w-full h-full object-cover"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center  bg-opacity-50 text-white text-center">
        <h2 className="text-xl font-bold mb-2 text-[#1a1a66]">Get Latest Update By Subscribe</h2>
        <p className="text-[#1a1a66] text-lg mb-4 font-bold">Our Newsletter</p>
        <button className="bg-pink-600  px-6 py-2 rounded hover:bg-blue-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Lettersubs;


