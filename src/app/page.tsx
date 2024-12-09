import Hero from '@/components/hero'
import LastestBlog from '@/components/lastestBlog'
import Lettersubs from '@/components/lettersubs'
import ShopexOffer from '@/components/shopex'
import Trending from '@/components/trending'
import Uniquefeature from '@/components/uniquefeature'
import Products from './products/page'
import React from 'react'

const Page = () => {
  return (
    <div>
    {/* */}

    <Hero/>
    {/* <Featured /> */}
      <LastestBlog/>
      <Uniquefeature />
      <Trending />
      <ShopexOffer/>
      <Lettersubs />
      <Products/>
      
    </div>
  )
}

export default Page