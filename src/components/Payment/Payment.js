import React from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";
import BasketItem from "../BasketItem/BasketItem";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment_container">
        <div className="payment_section">Checkout ({basket.length} items)</div>
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.Email}</p>
            <p>3 Douglass Park #105</p>
            <p> Boston, MA </p>
            <p>+8572009432</p>
          </div>
        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
            {basket.map((item) => (
              <BasketItem
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
