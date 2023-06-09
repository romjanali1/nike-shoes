import React from 'react';
import './Product.css';

const Product = (props) => {
    const {image, name, price} = props.product;
    return (
        <div className='product'>
            <img src={image} alt="" />
           <div className='product-name'>
           <h5>{name}</h5>
            <h5>${price}</h5>
           </div>
           <button onClick={() => props.addtoCart(props.product)} className='cart-btn'>
            <p>Add to Cart</p>
           </button>
            
        </div>
    );
};

export default Product;