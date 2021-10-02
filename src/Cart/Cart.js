import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props);
    const {cart}=props;

    let totalQuantity=0;
    let price=0;
    for(const product of cart){
        if (!product.quantity) {
            product.quantity=1;
        }
        price=price+product.price * product.quantity;
        totalQuantity=totalQuantity+product.quantity;
    }

    const shipping=price>0 ? 15 :0;
    const tax=( price+shipping)*(10/100);
    const grandTotal= price+shipping+tax;
    return (
        <div>
             <h2>Order Summary</h2>
            <h3>Items Ordered {totalQuantity}</h3>
            <p>Price: $ {price.toFixed(2)}</p>
            <p>Shipping: $ {shipping}</p>
            <p>Tax: $ {tax.toFixed(2)}</p>
            <p>Total: $ {grandTotal.toFixed(2)}</p>
           {props.children}
        </div>
    );
};

export default Cart;