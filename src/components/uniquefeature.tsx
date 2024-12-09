// src/components/Uniquefeature.jsx
import React from 'react';

const Uniquefeature = () => {
  return (
    <div className="flex items-center justify-center bg-purple-50 w-full h-[400px] ">
      <div className="flex items-center justify-center w-1/2 h-full ">
        <img
          src="/uniquesofa.png.png" // Replace with actual image path
          alt="Product Image"
          className="w-[400px] h-[400px] object-cover rounded-lg"
        />
      </div>

      <div className="w-1/2 pl-8">
        <h1 className="text-blue-800 text-2xl font-semibold text-left">
          Unique Features of Latest & <br /> Trending Products
        </h1>
        <ol className="list-none pl-6 mt-4">
          <li className="relative mb-2 text-gray-500">
            <span className="absolute left-[-1.5rem] top-0 text-red-500 text-2xl">•</span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="relative mb-2 text-gray-500">
            <span className="absolute left-[-1.5rem] top-0 text-blue-500 text-2xl">•</span>
            All frames constructed with hardwood solids and laminates
          </li>
          <li className="relative mb-2 text-gray-500">
            <span className="absolute left-[-1.5rem] top-0 text-[#6cd5f8] text-2xl">•</span>
            All frames constructed with hardwood solids and laminates
          </li>
        </ol>
        <br />
<button className='bg-pink-500 rounded-sm w-32 h-10'>Add to Cart</button>

      </div>
    </div>
  );
};

export default Uniquefeature;
