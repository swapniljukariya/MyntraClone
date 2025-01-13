import React from 'react';
import OfferTime from "./OfferTime";
import Banner from "./Banner";
import ProductGrid from "./ProductGrid";

function Main() {
  return (
    <div className='mt-16'>
      <OfferTime />
      <Banner />
      <ProductGrid />
    </div>
  );
}

export default Main;