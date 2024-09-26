import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Breadcrums from '../components/Breadcrums/Breadcrums';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/Descriptionbox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';
import { shopContext } from '../Context/ShopContext';

const Product = () => {
    const {all_product} = useContext(shopContext);
    const productId = useParams();
    const product = all_product.find((e)=>e.id===Number(productId.productId));
    console.log(product);
  return (
    <div>
      <Breadcrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

export default Product
