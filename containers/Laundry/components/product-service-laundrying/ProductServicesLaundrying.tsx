"use client";
import "./product-service-laundrying.css";
import { FaArrowRightLong } from "react-icons/fa6";
import React, { useState } from "react";
import {
  ProductServiceLaundryData,
  ProductServiceLaundryType,
} from "@/constants/index";
import { RiSearch2Line } from "react-icons/ri";

const MobileView: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceLaundryType | undefined
  >(ProductServiceLaundryData[0]);

  return (
    <div className="Restaurantmobile-display">
      <div
        className="Restaurantmob"
        style={{
          backgroundImage: `url(${selectedVendor?.bigImg})`,
          backgroundSize: "140% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="Restaurantmob_overlay">
          <div className="Restaurantmob-cont">
            <div className="Restauranttext-container">
              <div className="Restaurantdescription">
                Order from your favorite restaurant and get your meal delivered
                to you in minutes.
              </div>
            </div>
          </div>
        </div>
        <div className="RestaurantMobilesearch_filter_box">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search here"
            className="RestaurantMobilesearch_filter_input"
          />
          <RiSearch2Line className="RestaurantMobilesearch_filter_icon" />
        </div>
      </div>
      <div className="Mobile_TopRestaurant_container">
        <div className="MobileTopRestaurant_Frame_Container">
          <p className="MobileTopRestaurant_Text">Top Restaurants Near you.</p>
          <div className="Mobile_TopRestaurant_Images">
            <img
              src="/images/Rectangle 291.png"
              alt="Top Restaurant Images"
              className="Mobile_TopRestaurant_Image"
            />
            <img
              src="/images/Rectangle 293 (2).png"
              alt="Top Restaurant Images"
              className="Mobile_TopRestaurant_Image"
            />
            <img
              src="/images/Rectangle 294.png"
              alt="Top Restaurant Images"
              className="Mobile_TopRestaurant_Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProductServicesLaundrying: React.FC = () => {
  const [selectedVendor, setSelectedVendor] = useState<
    ProductServiceLaundryType | undefined
  >(ProductServiceLaundryData[0]);

  return (
    <>
      <div className="hero_cont">
        <div className="hero_prod">
          <div className="prod">
            <div className="prod-cont">
              <div className="tags-container">
                {ProductServiceLaundryData.map(
                  (item: ProductServiceLaundryType) => (
                    <button
                      type="button"
                      key={item._id}
                      className={`tag-text ${
                        item === selectedVendor ? "tag-text-active" : ""
                      }`}
                      onClick={() => setSelectedVendor(item)}
                    >
                      {item.tag}
                    </button>
                  )
                )}
              </div>
              <div className="text-container">
                <p className="restaurant_highlight">
                  Experience the Ultimate in
                </p>
                <p className="restaurant_highlight2">
                  cleanliness and convenience
                </p>
                <div className="laundry_description">
                  Let us handle the dirty work while you enjoy life's fine
                  moment
                </div>
                <button type="button" className="get-started-btn">
                  Book Now
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
                <div className="NameAndStarRating">
                  <p className="LaundryName">
                    Christopher Laundry Room
                    </p>
                    <div className="LaundryRating">
                    <div className="RatingStars">
                      <p>s</p>
                      <p>s</p>
                      <p>s</p>
                      <p>s</p>
                      <p>sl</p>
                    </div>
                    <p className="RatingNum">4.5</p>
                    </div>
                </div>
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
};
