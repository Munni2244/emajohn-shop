import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts]=useState([]);
    const [cart, setCart]= useState([]);
    const [searchProduct , setSearchProduct]= useState([]);

    //get fetch data
    useEffect(()=> {
   fetch('./products.JSON')
.then(res=> res.json())
.then(data=>{
    setProducts(data);
    setSearchProduct(data);
}
)

    },[])

    ///local storage set data
    useEffect(()=> {
      if(products.length){
        const saveCart=getStoredCart();
          const storedCart=[];
          for(const key in saveCart){
            const addedCart= products.find(product=> product.key===key)
          
            if (addedCart) {
                const quantity= saveCart[key];
                addedCart.quantity=quantity;
                storedCart.push(addedCart)
            }

          }
          setCart(storedCart)
      }
    },[products])

 //////search products
    const SearchData=( event)=> {
    const searchText= event.target.value;

    const matchProduct= products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
    // console.log(matchProduct.length);
    setSearchProduct(matchProduct)

    }

    ///event handler
const Handler=(product)=> {
    const newCart=[...cart, product];
    addToDb(product.key)
setCart(newCart)
}

    return (
        <div>
             <div className="search-container">
                <input onChange={SearchData} className="inputField" type="text" placeholder="Search your products" />
            </div>

            <div className="blog">
            <div className="products-container">{ 
             searchProduct.map(product=> <Products products={product} key={product.key} handler={Handler}></Products>)
        }
            </div>

            <div className="cart-container">
           {
               <Cart cart={cart}></Cart>
           }
            </div>
        </div>
        </div>
        
    );
};

export default Shop;