import React from 'react';
import { useHistory } from 'react-router';
import Cart from '../Cart/Cart';
import ReviweItem from '../component/ReviweItem/ReviweItem';
import UseProducts from '../Hooks/Hooks';
import UseCart from '../UseCart/UseCart';
import { clearTheCart, removeFromDb } from '../utilities/fakedb';


const Order = () => {
    const [products]= UseProducts();
   const [cart, setCart]= UseCart(products);
   const history= useHistory();

   const RemoveHandler=(key)=>{
    const NewCart= cart.filter(product=> product.key !==key)
    setCart(NewCart)
    removeFromDb(key)
}

const OrderHandler=()=>{
  history.push('/shipping')
// setCart([]);
// clearTheCart()
}

    return (
      
        <div className="blog">
            <div className="products-container">
            {
                cart.map(product=> <ReviweItem products={product} handler={RemoveHandler} key={product.key}></ReviweItem> )
            }
            </div>

            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={OrderHandler} className='button'> Order place</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Order;