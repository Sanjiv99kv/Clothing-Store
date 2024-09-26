import { createContext, useEffect, useState } from "react";



export const shopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 0; i < 300 + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}



const ShopContextProvider = (props) => {

    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('http://localhost:4000/allproducts')
            .then((resp) => resp.json())
            .then((data) => { setAll_Product(data) })


            if(localStorage.getItem('auth-token')){
                fetch('http://localhost:4000/getcart',{
                    method:'POST',
                    headers:{
                        Accept:'application/form-data',
                        'auth-token':`${localStorage.getItem('auth-token')}`,
                        'Content-Type':'application/json'
                    },
                    body:"",
                })
                .then((resp)=>resp.json())
                .then((data)=>{setCartItems(data)})
            }
    }, [])

    const addToCart = (itemid) => {
        alert("Item added to cart")
        setCartItems(prev => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemid })
            })
            .then((resp) => resp.json())
            .then((data) => { console.log(data) })
        }
    }

    const removeFromCart = (itemid) => {
        setCartItems(prev => ({ ...prev, [itemid]: prev[itemid] - 1 }))
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ "itemId": itemid })
            })
            .then((resp) => resp.json())
            .then((data) => { console.log(data) })
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (let i = 0; i < all_product.length; i++) {
            if (cartItems[i] > 0) {
                let info = all_product.find((item) => item.id === i)
                totalAmount += info.new_price * cartItems[i];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item]
            }
        }
        return totalItems;
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    console.log(cartItems);

    return (
        <shopContext.Provider value={contextValue}>
            {props.children}
        </shopContext.Provider>
    )
}

export default ShopContextProvider;