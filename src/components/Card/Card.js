import React from 'react';
import './Card.css';

const Card = ({cart}) => {
    console.log(cart)
    let total = 0;
    for(const product of cart){
        total = parseFloat( (total + product.price).toFixed(2));
    }
    const tex =parseFloat( (total *0.1).toFixed(2));
    const price = total + tex;
    return (
        <div className='cart-items'>
             <h1>Order summary</h1>
             <p>Add Items : {cart.length}</p>
             <p>Price :${total}</p>
             <p>Tax :${tex}</p>
             <h4>Total Price :${price}</h4>
            
        </div>
    );
};

export default Card;