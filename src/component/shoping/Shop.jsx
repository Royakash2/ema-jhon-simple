import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../product/product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    useEffect(() =>{
        const storedCart = getShoppingCart();
        const saveCart = [];
        // console.log(storedCart);
        /* step 1 get id with for in loop*/ 
        for(const id in storedCart){
            /* step 2 get the product by using id  */
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                const quantity = storedCart.id;
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
            console.log('added product',addedProduct)
        }
    },[products])

    const handleAddToCart = (product) => {
        // console.log(product);
        const newCart =[...cart, product]
        setCart(newCart);
        addToDb(product.id)
      }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => 
                    <Product key={product.id}
                     product={product}
                      handleAddToCart={handleAddToCart}>
                      </Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;