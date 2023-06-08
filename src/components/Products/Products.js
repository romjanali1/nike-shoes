import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])
    useEffect( () => {
        fetch('product.json')
        .then(res => res.json())
        .then(datas => setProducts(datas))
    } , [])

    const addtoCart = (products) => {
        const addCart = [...cart , products]
        setCart(addCart)
        console.log(products)
    }
    return (
        <div className='contuner'>
            <div className='product-contuner'>
                {
                    products.map(product => 
                        <Product
                        key = {product.id}
                        product = {product}
                        addtoCart = {addtoCart}
                        ></Product>

                     )
                }
            </div>

            <div className='card'>
                <h1>Order summary</h1>
                <p>items {cart.length}</p>

            </div>
            
        </div>
    );
};

export default Products;