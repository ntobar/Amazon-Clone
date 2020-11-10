import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  let subtotalValue = 0;

  function getSubtotal(item) {
    subtotalValue += item.price;
    console.log(`current subtotal: ${subtotalValue}`);
    return subtotalValue;
  }

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{basket.map(getSubtotal)}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" /> This order contains a gift{" "}
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
