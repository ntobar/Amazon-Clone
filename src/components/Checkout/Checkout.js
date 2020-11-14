import React from "react";
import "./Checkout.css";
import Subtotal from "../Subtotal/Subtotal";
import BasketItem from "../BasketItem/BasketItem";
import { useStateValue } from "../../StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
        />
        <div>
          <h3>Here is your cart, {user?.displayName}</h3>
          <h2 className="checkout_title">Your Shopping Cart</h2>

          {basket.map((item) => (
            <BasketItem
              id={item.id}
              image={item.image}
              title={item.title}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
