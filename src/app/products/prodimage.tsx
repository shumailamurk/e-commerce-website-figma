'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Product } from '../../../scripts/types/products';
import { client } from '@/sanity/lib/client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for router in Next.js 13+

const builder = imageUrlBuilder(client);

const Prodimage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [cart, setCart] = useState<string[]>([]); // Store added product IDs
  const [showPopup, setShowPopup] = useState<boolean>(false); // Show checklist pop-up
  const [isClient, setIsClient] = useState<boolean>(false); // State to check if it's a client-side render
  const router = useRouter(); // Use useRouter directly

  // This ensures the component is rendered only on the client
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts: Product[] = await client.fetch(
          `*[_type == "product"] | order(_createdAt desc)[0..19] {
            _id,
            name,
            description,   
            price,
            oldPrice,
            slug,
            image
          }`
        );
        setProducts(fetchedProducts);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Failed to load products. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const urlFor = (source: string | undefined) => {
    if (!source) return '/path/to/placeholder.jpg';
    return builder.image(source).url();
  };

  const handleAddToCart = (productId: string) => {
    if (cart.includes(productId)) return; // Prevent duplicate items
    setCart([...cart, productId]);
    setShowPopup(true); // Show checklist pop-up

    setTimeout(() => {
      setShowPopup(false);
      router.push('/cart'); // Redirect after 2 seconds
    }, 2000);
  };

  if (!isClient) return null; // Ensure the component is rendered only on the client

  return (
    <div className="mx-10 mt-12">
      <h1 className="text-3xl font-bold text-center mb-12 text-purple-800">Latest Products</h1>

      {loading && <p>Loading products...</p>}
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex flex-wrap justify-center gap-8">
        {products.length === 0 ? (
          <p>No products available at the moment.</p>
        ) : (
          products.map((product) => (
            <div
              key={product._id}
              className="w-80 p-5 bg-white shadow-lg rounded-lg hover:scale-105 transition-transform ease-in-out duration-300"
            >
              <Link href={`/products/${product.slug.current}`}>
                {product.image?.asset && (
                  <div className="relative h-60 w-full mb-4">
                    <Image
                      src={urlFor(product.image?.asset._ref)}
                      alt={product.name || 'Product Image'}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                      loading="lazy"
                    />
                  </div>
                )}
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name || 'Unnamed Product'}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <p className="text-lg">
                  {product.oldPrice && (
                    <span className="text-gray-500 line-through mr-2">${product.oldPrice}</span>
                  )}
                  <span className="text-green-600 font-bold">${product.price}</span>
                </p>
              </Link>
              <button
                onClick={() => handleAddToCart(product._id)}
                className={`mt-4 px-6 py-2 rounded-full transition-all duration-300 
                  ${cart.includes(product._id) ? 'bg-green-500' : 'bg-purple-800'} 
                  text-white flex items-center justify-center`}
              >
                {cart.includes(product._id) ? (
                  <span className="text-white text-lg">✔</span>
                ) : (
                  'Add to Cart'
                )}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pop-up for Checklist */}
      {showPopup && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-opacity-50 bg-gray-900 flex items-center justify-center z-50">
          <div className="bg-purple-800 text-white p-6 rounded-lg shadow-lg flex items-center justify-center">
            <span className="text-2xl">✔ Item added to cart!</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Prodimage;


