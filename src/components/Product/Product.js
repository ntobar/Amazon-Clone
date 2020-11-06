import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product_info">
        <p>The Lean Startup</p>
        <p className="product_price">
          <small>$</small>
          <strong>17.99</strong>
        </p>
        <div className="product_rating">
          <p> ⭐</p>
        </div>
      </div>

      <img
        src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY500_.jpg"
        alt=""
      />

      <button>Add to Cart</button>
    </div>
  );
}

export default Product;
