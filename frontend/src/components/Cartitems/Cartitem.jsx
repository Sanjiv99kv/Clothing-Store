import React, { useContext } from 'react'
import './Cartitem.css'
import { shopContext } from '../../Context/ShopContext'
import remove_icon from '../../assets/cart_cross_icon.png'

const Cartitem = () => {
    const { all_product, cartItems, removeFromCart,getTotalCartAmount } = useContext(shopContext);
    return (
        <div className='cartitems'>
            <div className="cartitems-format-main weight">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((item, index) => {
                if (cartItems[item.id] > 0) {
                    return <div key={item.id} className="cartitems-format cartitems-format-main low-weight">
                        <img src={item.image} alt="" className='cartitems-product-icon' />
                        <p>{item.name}</p>
                        <p>${item.new_price}</p>
                        <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                        <p>${item.new_price*cartItems[item.id]}</p>
                        <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(item.id) }} alt="" />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1 className='weight'>Cart total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>Proceed to checkout</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If you have a promocode, Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder='promo code' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cartitem
