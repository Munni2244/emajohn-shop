import React from 'react';
import './Products.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const icon = <FontAwesomeIcon icon={faShoppingCart} />

const Products = (props) => {
    // console.log(props);
const{name,seller,stock,price, img}=props.products;
    return (
        <div className="products">
          <div>
          <img src={img} alt=""/>
          </div>

         <div className="details">
         <h3 style={{color:'blue', fontWeight:'400px'}}>{name}</h3>
         <h4>By {seller}</h4>
         <p>Price {price}</p>
         <p><small> Only {stock} left in stock, order soon </small></p>
         <button onClick={ ()=>props.handler(props.products)} className="button"> {icon} Add to cart</button>
         </div>
        </div>
    );
};

export default Products;