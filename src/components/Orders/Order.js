import React from "react";
import "./Order.css";
import moment from "moment";
import BasketItem from "../BasketItem/BasketItem";
import CurrencyFormat from "react-currency-format";

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
      <CurrencyFormat
        renderText={(value) => <h3>Order Total {value}</h3>}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
