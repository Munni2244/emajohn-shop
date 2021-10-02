import React from 'react';

const ReviweItem = (props) => {
    const {name,quantity, price, key}=props.products;
    const {handler}=props;
    
    return (
        <div className="products">
            <div className="details">
                <h4 style={{color:'blue'}}>{name}</h4>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <button onClick={()=> handler(key)} className="button"> Remove</button>
            </div>
        </div>
    );
};

export default ReviweItem;