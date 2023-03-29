import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
//   console.log(props.product);
  const { img, name, seller, price, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>price : ${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Ratings:{ratings}</p>
      </div>
      <button className="btn-cart" onClick={() => handleAddToCart(props.product)}>
        Add to cart 
        <FontAwesomeIcon icon={faShoppingCart} />
        </button>
    </div>
  );
};

export default Product;
