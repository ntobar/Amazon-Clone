import React from "react";
import "./Home.css";
import Product from "../Product/Product";
import shakerImg from "../../img/amazon.jpg";

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
            title="The Lean Startup"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY500_.jpg"
            rating={4}
          />
          <Product
            title="BlenderBottle Classic V2 Shaker Bottle, 28-Ounce, Black"
            price={9.99}
            image={shakerImg}
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product
            title="The Lean Startup"
            price={24.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY500_.jpg"
            rating={4}
          />
          <Product />
          <Product />
        </div>
        <div className="home_row"></div>
      </div>
    </div>
  );
}

export default Home;
