import React from "react";
import "./Order.css";
import moment from "moment";
import BasketItem from "../BasketItem/BasketItem";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>

      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
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
  );
}

export default Order;
