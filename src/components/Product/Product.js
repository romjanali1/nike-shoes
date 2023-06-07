import React from 'react';

const Product = (props) => {
    console.log(props)
    const {image, name, price} = props.product;
    return (
        <div>
            <img src={image} alt="" />
            <h5>{name}</h5>
            <h5>${price}</h5>
            
        </div>
    );
};

export default Product;