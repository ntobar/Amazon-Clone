import React from "react";
import "./BasketItem.css";

function BasketItem({ id, image, title, price, rating }) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />
      <div className="product_info">
        <p className="product_title">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p> ⭐</p>
            ))}
        </div>
        <button>Remove from Cart</button>
      </div>
    </div>
  );
}

export default BasketItem;
