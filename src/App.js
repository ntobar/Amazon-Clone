import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import Payment from "./components/Payment/Payment";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

function App() {
  const [{ username }, dispatch] = useStateValue();
  var user = auth.currentUser;

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User-> ", authUser);

      if (authUser) {
        console.log(`username ->>> ${username}`);
        //User logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
          //username: user.displayName
        });
      } else {
        //User logged out
        dispatch({
          type: "SET_USER",
          user: null,
          username: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
