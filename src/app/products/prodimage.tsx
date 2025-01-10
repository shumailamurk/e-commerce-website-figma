import React from 'react'
import Image from 'next/image'

const Prodimage = () => {
  return (
    <div className="flex flex-wrap justify-start mx-10 gap-8 mt-12">
      <h1 className="text-3xl font-sans text-[#3232a9] w-full">Related Products</h1>

      {/* Product 1 */}
      <div className="mt-10 w-full sm:w-[270px]">
        <Image 
          src={'/relat1.png'} 
          width={100} 
          height={100} 
          alt="Product 1" 
          className="w-full h-[340px] object-cover" 
        />
        <div className="flex">
          <h1 className="text-base text-[#3232a9]">Mens Fashion Wear</h1>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
        </div>
        <div>
          <p className="text-[#3232a9]">$43.00</p>
        </div>
      </div>

      {/* Product 2 */}
      <div className="mt-10 w-full sm:w-[270px]">
        <Image 
          src={'/relat2.png'} 
          width={100} 
          height={100} 
          alt="Product 2" 
          className="w-full h-[340px] object-cover" 
        />
        <div className="flex">
          <h1 className="text-base text-[#3232a9]">Women’s Fashion</h1>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
        </div>
        <div>
          <p className="text-[#3232a9]">$43.00</p>
        </div>
      </div>

      {/* Product 3 */}
      <div className="mt-10 w-full sm:w-[270px]">
        <Image 
          src={'/relat3.png'} 
          width={100} 
          height={100} 
          alt="Product 3" 
          className="w-full h-[340px] object-cover" 
        />
        <div className="flex">
          <h1 className="text-base text-[#3232a9]">Wolx Dummy Fashion</h1>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
        </div>
        <div>
          <p className="text-[#3232a9]">$43.00</p>
        </div>
      </div>

      {/* Product 4 */}
      <div className="mt-10 w-full sm:w-[270px]">
        <Image 
          src={'/relat4.png'} 
          width={100} 
          height={100} 
          alt="Product 4" 
          className="w-full h-[340px] object-cover" 
        />
        <div className="flex">
          <h1 className="text-base text-[#3232a9]">Top Wall Digital Clock</h1>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
          <span className="text-sm mx-1" role="img" aria-label="star">⭐</span>
        </div>
        <div>
          <p className="text-[#3232a9]">$67.00</p>
        </div>
      </div>
    </div>
  )
}

export default Prodimage
