"use client";
import "./product-service-food-vendor.css";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import {
  ProductServiceVendorData,
  ProductServiceVendorType,
} from "@/constants/index";

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
            <div className="tags-container">
              {ProductServiceVendorData.map((item) => (
                <div
                  key={item._id}
                  className={`tag-text ${
                    item === selectedVendor ? "tag-text-active" : ""
                  }`}
                  onClick={() => setSelectedVendor(item)}
                >
                  {item.tag}
                </div>
              ))}
            </div>
            <div className="text-container">
              <div className="highlight">
                {selectedVendor?.foodText ||
                  "Your Ultimate Solution for Modern Lifestyle Needs"}
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
              paddingTop: "10px",
              paddingBottom: "10px",
              borderRadius: 50,
              margin: "8px auto",
              overflow: "hidden",
              background:
                "linear-gradient(0deg, #E6E6E6 0%, #E6E6E6 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.10) 0%, rgba(0, 0, 0, 0.10) 100%)",
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
                style={{ width: "100%", height: 30 }}
                src={selectedVendor?.bike}
                alt="Bike"
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
                style={{ width: "100%", height: "30%" }}
                src={selectedVendor?.map}
                alt="Map"
              />
            </div>
          </div>
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
              <div className="image">
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
