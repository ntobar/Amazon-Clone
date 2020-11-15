import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import shakerImg from "../../img/amazon.jpg";
import espressoImg from "../../img/espresso.jpg";
import surfWaxImg from "../../img/surfWax.jpg";
import keyboardImg from "../../img/keyboard.jpg";
import tableImg from "../../img/coffeetable.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home_row">
          <Product
            key="10"
            id="1"
            title="The Lean Startup"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY500_.jpg"
            rating={4}
          />
          <Product
            key="20"
            id="2"
            title="BlenderBottle Classic V2 Shaker Bottle, 28-Ounce, Black"
            price={9.99}
            image={shakerImg}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            key="30"
            id="3"
            title="Sticky Bumps Cool/Cold Water Surfboard Wax 5 Pack"
            price={12.85}
            image={surfWaxImg}
            rating={5}
          />
          <Product
            key="40"
            id="4"
            title="Breville BES870XL Barista Express Espresso Machine, Brushed Stainless Steel"
            price={599.95}
            image={espressoImg}
            rating={4}
          />
          <Product
            key="50"
            id="5"
            title="PICTEK RGB Gaming Keyboard USB Wired"
            price={21.99}
            image={keyboardImg}
            rating={4}
          />
        </div>
        <div className="home_row">
          <Product
            key="60"
            id="6"
            title="VASAGLE Industrial Coffee Table with Storage Shelf for Living Room, Wood Look Accent Furniture with Metal Frame, Easy Assembly, Rustic Brown ULCT61X"
            price={63.42}
            image={tableImg}
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
