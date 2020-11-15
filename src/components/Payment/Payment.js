import React from "react";
import "./Payment.css";
import { useStateValue } from "../../StateProvider";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  return <div></div>;
}
