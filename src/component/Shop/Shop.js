import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]= useState([]);

    useEffect(()=> {
   fetch('./products.JSON')
.then(res=> res.json())
.then(data=> setProducts(data))
    },[])

const Handler=(product)=> {
    const newCart=[...cart, product];
setCart(newCart)
}

    return (
        <div className="blog">
            <div className="products-container">
        
        {
            
             products.map(product=> <Products products={product} key={product.key} handler={Handler}></Products>)
        }
            </div>

            <div className="cart-container">
           {
               <Cart cart={cart}></Cart>
           }
            </div>
        </div>
    );
};

export default Shop;