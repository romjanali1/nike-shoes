import React from 'react';

const Card = ({cart}) => {
    return (
        <div>
             <h1>Order summary</h1>
             <p>items {cart.length}</p>
            
        </div>
    );
};

export default Card;