import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
  const { products ,getAllProducts} = useContext(ShopContext); // Only accessing the necessary value
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    getAllProducts()
    setLatestProducts(products.slice(0, 5));
  }, []); 




  return (
    <div className='my-10'>
      <div className='text-center py-8 text-3xl'>
        <Title text1={'LATEST'} text2={'Proudcts'} />
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta ad pariatur dolores ea voluptas placeat nulla eum repudiandae deserunt libero.
        </p>
      </div>
      {/* Rendering products */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {latestProducts.map((item, index) => (
          
          <ProductItem key={item.productId} id={item.productId} imageUrl={item.productImage.imageUrl} name={item.name} price={item.price} discountPercentage = {item.discountPercentage} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
