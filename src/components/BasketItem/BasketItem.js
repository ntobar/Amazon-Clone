import React from "react";
import "./BasketItem.css";
import { useStateValue } from "../../StateProvider";

function BasketItem({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
      <img src={image} alt="" />

      <div className="product_options"></div>
    </div>
  );
}
