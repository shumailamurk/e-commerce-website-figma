// export interface Product {
//   _id: string;
//   name: string;
//   _type: "product";
//   image?: {
//     asset: {
//       _ref: string;
//       _type: "reference";
//     };
//   };
//   price: string;
//   oldPrice?: string;
//   description: string;
//   discountPercentage?: number;
//   isFeaturedProduct?: boolean;
//   stockLevel?: number;
//   category?: string;
//   slug: {
//     _type : "slug";
//     current: string; 
//   };
// }


export interface Product {
  _id: string; // Unique identifier for the product
  name: string; // Product name
  _type: "product"; // Type of the document (product)
  image?: { // Optional image field
    asset: {
      _ref: string; // Reference to the image asset
      _type: "reference"; // Type reference for the image
    };
  };
  price: string; // Price of the product
  oldPrice?: string; // Optional old price, if any discount is applied
  description: string; // Product description (detailed explanation about the product)
  details?: string; // Optional additional details about the product (e.g., quality, material, etc.)
  discountPercentage?: number; // Optional discount percentage, if applicable
  isFeaturedProduct?: boolean; // Whether the product is featured or not
  stockLevel?: number; // Stock level of the product
  category?: string; // Category of the product (e.g., Chair, Sofa, etc.)
  slug: { // Slug field for URL generation
    _type: "slug";
    current: string; // The current slug value
  };
  ratings?: number; // Optional rating of the product (scale 1 to 5)
  numReviews?: number; // Optional number of reviews
}
