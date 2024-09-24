"use client";
import "./product-service-food-vendor.css";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import {
  ProductServiceVendorData,
  ProductServiceVendorType,
} from "@/constants/index";
import { RiSearch2Line } from "react-icons/ri";

const MobileView: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceVendorType | undefined
  >(ProductServiceVendorData[0]);

  return (
    <div className="mobile-display">
      <div
        className="mob"
        style={{
          backgroundImage: `url(${selectedVendor?.bigImg})`,
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="mob_overlay">
          <div className="mob-cont">
            <div className="text-container">
              <div className="description">
                Order from your favorite restaurant and get your meal delivered
                to you in minutes.
              </div>
            </div>
          </div>
        </div>
      <div className="Mobilesearch_filter_box">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search here"
          className="Mobilesearch_filter_input"
        />
        <RiSearch2Line className="Mobilesearch_filter_icon" />
      </div>
      </div>
    </div>
  );
};

export const ProductServicesFoodVendor: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceVendorType | undefined
  >(ProductServiceVendorData[0]);

  return (
    <>
      <div className="hero_cont">
        <div className="hero_prod">
          <div className="prod">
            <div className="prod-cont">
              <div className="tags-container">
                {ProductServiceVendorData.map((item) => (
                  <button
                    key={item._id}
                    className={`tag-text ${
                      item === selectedVendor ? "tag-text-active" : ""
                    }`}
                    onClick={() => setSelectedVendor(item)}
                  >
                    {item.tag}
                  </button>
                ))}
              </div>
              <div className="text-container">
                <p className="restaurant_highlight">
                  Order from your favorite restaurant and get your
                </p>
                <p className="restaurant_highlight2">
                  meal delivered in minutes.
                </p>
                <button className="get-started-btn">
                  Get Started
                  <FaArrowRightLong className="get-started-btn-icon" />
                </button>
              </div>
            </div>
            {selectedVendor && (
              <div className="restaurant_Image">
                <img src={selectedVendor.bigImg} alt={selectedVendor.tag} />
                <div className="overlay">
                  <div className="footer-text">{selectedVendor.foodText}</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedVendor && (
          <div className="hero_map">
            <img
              className="map"
              src={selectedVendor.map}
              alt={selectedVendor.tag}
            />
            <div className="pro-logo">
              <div className="pro-name">
                <img
                  className="pro-img"
                  src={selectedVendor.foodImg}
                  alt={selectedVendor.tag}
                />
              </div>
              <div className="b-l">
                <img
                  className="bike"
                  src={selectedVendor.bike}
                  alt={selectedVendor.tag}
                />
              </div>
            </div>
          </div>
        )}
        <MobileView />
      </div>
    </>
  );
}
