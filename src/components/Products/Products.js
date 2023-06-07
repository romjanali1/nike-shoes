import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(datas => setProducts(datas))
    } , [])
    return (
        <div className='contuner'>
            <div className='product-contuner'>
                {
                    products.map(product => 
                        <Product
                        key = {product.id}
                        product = {product}
                        ></Product>

                     )
                }
            </div>

            <div className='card'>
                <h1>order samary</h1>

            </div>
            
        </div>
    );
};

export default Products;