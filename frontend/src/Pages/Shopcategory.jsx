import React, { useContext } from 'react'
import './CSS/Shopcategory.css'
import dropdown from '../assets/dropdown_icon.png'
import Item from '../components/Item/Item'
import { shopContext } from '../Context/ShopContext'

const Shopcategory = (props) => {

  const {all_product} = useContext(shopContext);

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,index)=>{
          if(props.category===item.category){
            return <Item key={index} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
        })}
      </div>
        <div className="load-more">
          Explore more
        </div>
    </div>
  )
}

export default Shopcategory
