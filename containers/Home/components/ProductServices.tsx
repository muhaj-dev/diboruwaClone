"use client";

import React from "react";
import "./home.css";

const MobileView = () => {
  return (
    <div className="mobile-display">
      <div
        className="mob"
        style={{
          backgroundImage: 'url("/images/food.png")',
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
        className="mob_overlay"
         
        >
          <div className="mob-cont">
            <div className="tags-container">
              <div className="tag-text-active ">Food</div>
              <div className="tag-text">Moving</div>
              <div className="tag-text">Laundry</div>
              <div className="tag-text">Cleaning</div>
              <div className="tag-text">Groceries</div>
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
        </div>
      </div>
      <div className="mob_loc">
        <div className="mob-loc-map">
         
          <div
            style={{
              width: "90%",
              height: "100px",
              paddingTop: '10px',
              paddingBottom: '10px',
              // paddingLeft: 17.32,
              // paddingRight: 19.52,
              borderRadius: 50,
              margin: '8px auto',
              overflow: "hidden",
             
              // backgroundColor: ,
              background: 'linear-gradient(0deg, #E6E6E6 0%, #E6E6E6 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)', 
            }}
          >
            <div 
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                 paddingLeft: 17,
              paddingRight: 17,
                display: "flex",
              }}
            >
              <img
                style={{ width: 40, height: 30 }}
                src="/images/bike.png"
              />
              <img
                style={{ width: 27.48, height: 27.48 }}
                src="/images/location.png"
              />

            </div>

            <div 
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                
                display: "flex",
              }}
            >
              <img
                style={{ width: '100%', height: '30%' }}
                src="/images/map.png"
              />
             

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProductServices() {
  return (
    <div className="hero_cont">
      <div className="hero_prod">
        <div className="prod">
          <div className="prod-cont">
            <div className="tags-container">
              <div className="tag-text-active tag-text">Food</div>
              <div className="tag-text">Moving</div>
              <div className="tag-text">Laundry</div>
              <div className="tag-text">Cleaning</div>
              <div className="tag-text">Groceries</div>
            </div>
            <div className="text-container">
            <p className="highlight">
                Your Ultimate Solution for 
               
              </p>
              <p className="highlight2">
                
                Modern Lifestyle Needs
              </p>
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
          <div className="b-l">
            <img
              className="bike"
              src="/images/bike.png"
              alt="Chef preparing food"
            />
             <img
              className="bike"
              src="/images/location.png"
              alt="Chef preparing food"
            />
          </div>
        </div>
      </div>

      <MobileView />
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
