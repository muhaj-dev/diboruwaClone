"use client";

import React from "react";
import "./home.css";


const mobileVeiw = () => {
  return(
    <div>the</div>
  )
}

export default function ProductServices() {


  return (
    <div className="hero_cont">
      <div className="hero_prod">
        <div className="prod">
          <div className="prod-cont">
            <div className="tags-container">
              <div className="tag-text-active tag-text">Food</div>
              <div className="tag-text">Courier</div>
              <div className="tag-text">Laundry</div>
              <div className="tag-text">Grooming</div>
            </div>
            <div className="text-container">
              <div className="highlight">
                Your Ultimate Solution for Modern Lifestyle Needs
              </div>
              <div className="description">
                One platform, endless convenience. Simplify your life with our
                intuitive solution for all your needs.
              </div>
              <button className="get-started-btn">Get Started</button>
            </div>
          </div>
          <div className="image">
            <img src="/images/food.png" alt="Chef preparing food" />
            <div className="overlay">
              <div className="footer-text">
                Order from your favorite restaurant and get your meal delivered
                in minutes.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero_map">
        <img className="map" src="/images/map.png" alt="Chef preparing food" />
        <div className="pro-logo">
          <div className="pro-name">
            <img
              className="pro-img"
              src="/images/pLogo.png"
              alt="Chef preparing food"
            />

            <div className="pro-det">
              <p>The Spicy Meal Resturant</p>
              <div className="star">
                <img className="s" src="/images/star.svg" alt="star" />
                <img className="s" src="/images/star.svg" alt="star" />
                <img className="s" src="/images/star.svg" alt="star" />
                <img className="s" src="/images/star.svg" alt="star" />
                <p>4.0</p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="bike"
              src="/images/bike.png"
              alt="Chef preparing food"
            />
          </div>

        </div>
      </div>
      {/* {mobileVeiw} */}
    </div>
  );
}



{
  /* <div className="container">
<div>

</div>
<div className="tags-container">
  <div className="tag tag-food">
  <div className="tag-text">Food</div>
  </div>
  <div className="tag tag-courier">
    <div className="tag-text">Courier</div>
  </div>
  <div className="tag tag-laundry">
    <div className="tag-text">Laundry</div>
  </div>
  <div className="tag tag-grooming">
    <div className="tag-text">Grooming</div>
  </div>
</div>
<img
  className="image"
  src="https://via.placeholder.com/449x276"
  alt="Chef preparing food"
/>
<div className="text-container">
  <div className="highlight">
    Your Ultimate Solution for Modern Lifestyle Needs
  </div>
  <div className="description">
    One platform, endless convenience. Simplify your life with our
    intuitive solution for all your needs.
  </div>
</div>
<div className="get-started-btn">
  <div className="get-started-text">Get Started</div>
  <div className="arrow-container">
    <div className="arrow">
      <div className="arrow-part arrow-part-1"></div>
      <div className="arrow-part arrow-part-2"></div>
    </div>
  </div>
</div>
<div className="overlay" />
<div className="footer-text">
  Order from your favorite restaurant and get your meal delivered in
  minutes.
</div>
</div> */
}
