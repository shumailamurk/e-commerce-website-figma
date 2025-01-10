import React from "react";

const Feature: React.FC = () => {
  const offers = [
    { id: 1, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/shop1.png" },
    { id: 2, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/shop2.png" },
    { id: 3, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/shop3.png" },
    { id: 4, title: "24/7 Support", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.", image: "/shop4.png" },
  ];

  return (
    <div className="py-10 px-5 bg-white">
      <h2 className="text-3xl font-bold text-center mb-5">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {offers.map((offer) => (
          <div key={offer.id} className="text-center p-4">
            <img src={offer.image} alt={offer.title} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold">{offer.title}</h3>
            <p className="text-gray-500">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;