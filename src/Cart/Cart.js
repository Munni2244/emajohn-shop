import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;

    let price=0;
    for(const product of cart){
        price=price+product.price;
    }

    const shipping=15;
    const tax=( price+shipping)*(10/100);
    const grandTotal= price+shipping+tax;
    return (
        <div>
             <h2>Order Summary</h2>
            <h3>Items Ordered {cart.length}</h3>
            <p>Price: {price.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <p>Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;